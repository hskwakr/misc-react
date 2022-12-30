import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache',
});

export const fetchPlugin = (inputCode: string) => ({
  name: 'fetch-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onLoad({ filter: /(^index\.js$)/ }, () => ({
      loader: 'jsx',
      contents: inputCode,
    }));
    
    build.onLoad({ filter: /\.css$/ }, async (args: esbuild.OnLoadArgs) => {
      const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
        args.path
      );
      if (cachedResult != null) {
        return cachedResult;
      }

      const res = await axios.get<string>(args.path);
      const { data } = res;
      if (res.request === null || !(res.request instanceof XMLHttpRequest)) {
        throw new Error('Unexpected responce.request');
      }

      const escaped = data
        .replace(/\n/g, '')
        .replace(/"/g, '\\"')
        .replace(/'/g, "\\'");

      const contents = `
        conststyle = document.createElement('style');
        style.innerText = '${escaped}';
        document.head.appendChild(style);
      `;

      const result: esbuild.OnLoadResult = {
        loader: 'jsx',
        contents,
        resolveDir: new URL('./', res.request.responseURL).pathname,
      };

      await fileCache.setItem(args.path, result);

      return result;
    });

    build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
      const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
        args.path
      );
      if (cachedResult != null) {
        return cachedResult;
      }

      const res = await axios.get<string>(args.path);
      const { data } = res;
      if (res.request === null || !(res.request instanceof XMLHttpRequest)) {
        throw new Error('Unexpected responce.request');
      }

      const result: esbuild.OnLoadResult = {
        loader: 'jsx',
        contents: data,
        resolveDir: new URL('./', res.request.responseURL).pathname,
      };

      await fileCache.setItem(args.path, result);

      return result;
    });
  },
});
