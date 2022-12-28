import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache',
});

export const unpkgPathPlugin = (inputCode: string) => ({
  name: 'unpkg-path-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => {
      console.log('onResolve', args);

      if (args.path === 'index.js') {
        return {
          path: args.path,
          namespace: 'a',
        };
      }

      if (args.path.includes('./') || args.path.includes('../')) {
        return {
          path: new URL(args.path, `http://unpkg.com${args.resolveDir}/`).href,
          namespace: 'a',
        };
      }

      return {
        path: `http://unpkg.com/${args.path}`,
        namespace: 'a',
      };
    });

    build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
      // console.log('onLoad', args);

      if (args.path === 'index.js') {
        return {
          loader: 'jsx',
          contents: inputCode,
        };
      }

      const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
        args.path
      );

      if (cachedResult != null) {
        return cachedResult;
      }

      const { data, request } = await axios.get(args.path);

      const result: esbuild.OnLoadResult = {
        loader: 'jsx',
        contents: data,
        resolveDir: new URL('./', request.responseURL).pathname,
      };

      await fileCache.setItem(args.path, result);

      return result;
    });
  },
});
