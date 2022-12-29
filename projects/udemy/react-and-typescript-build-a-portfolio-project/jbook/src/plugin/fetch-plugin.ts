import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache',
});

export const fetchPlugin = (inputCode: string) => ({
  name: 'fetch-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
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

      const loader = args.path.match(/\.css$/) != null ? 'css' : 'jsx';

      const result: esbuild.OnLoadResult = {
        loader,
        contents: data,
        resolveDir: new URL('./', request.responseURL).pathname,
      };

      await fileCache.setItem(args.path, result);

      return result;
    });
  },
});
