import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => ({
  name: 'unpkg-path-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onResolve({ filter: /.*/ }, async (args: any) => ({
      path: args.path,
      namespace: 'a',
    }));

    build.onLoad({ filter: /.*/ }, async (args: any) => {
      if (args.path === 'index.js') {
        return {
          loader: 'jsx',
          contents: `
              import message from './message';
              console.log(message);
            `,
        };
      }
      return {
        loader: 'jsx',
        contents: 'export default "hi there!"',
      };
    });
  },
});
