import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localforage from 'localforage';

const fileCache = localforage.createInstance({
  name: 'filecache',
});

export const unpkgPathPlugin = (inputCode: string) => ({
  name: 'unpkg-path-plugin',
  setup(build: esbuild.PluginBuild) {
    // Handle root entry file of 'index.js'
    build.onResolve(
      { filter: /(^index\.js$)/ },
      (args: esbuild.OnResolveArgs) => ({
        path: args.path,
        namespace: 'a',
      })
    );

    // Handle relative paths in a module
    build.onResolve(
      { filter: /^\.+\// },
      async (args: esbuild.OnResolveArgs) => ({
        path: new URL(args.path, `http://unpkg.com${args.resolveDir}/`).href,
        namespace: 'a',
      })
    );

    // Handle main file of a module
    build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => ({
      path: `http://unpkg.com/${args.path}`,
      namespace: 'a',
    }));

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
