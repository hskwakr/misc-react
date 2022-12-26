import * as esbuild from 'esbuild-wasm';
import axios from 'axios';

export const unpkgPathPlugin = () => ({
  name: 'unpkg-path-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => {
      if (args.path === 'index.js') {
        return {
          path: args.path,
          namespace: 'a',
        };
      }

      if (args.path === 'tiny-test-pkg') {
        return {
          path: 'https://unpkg.com/tiny-test-pkg',
          namespace: 'a',
        };
      }

      return {
        path: args.path,
        namespace: 'a',
      };
    });

    build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
      if (args.path === 'index.js') {
        return {
          loader: 'jsx',
          contents: `
              import message from 'tiny-test-pkg';
              console.log(message);
            `,
        };
      }

      const { data } = await axios.get(args.path);

      return {
        loader: 'jsx',
        contents: data,
      };
    });
  },
});
