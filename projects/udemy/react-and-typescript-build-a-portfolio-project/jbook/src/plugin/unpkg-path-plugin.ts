import * as esbuild from 'esbuild-wasm';
import axios from 'axios';

export const unpkgPathPlugin = () => ({
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
      console.log('onLoad', args);

      if (args.path === 'index.js') {
        return {
          loader: 'jsx',
          contents: `
          import react from 'react';
          import reactDOM from 'react-dom';
          console.log(react, reactDOM)
            `,
        };
      }

      const { data, request } = await axios.get(args.path);

      return {
        loader: 'jsx',
        contents: data,
        resolveDir: new URL('./', request.responseURL).pathname,
      };
    });
  },
});
