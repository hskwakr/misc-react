import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => ({
  name: 'unpkg-path-plugin',
  setup(build: esbuild.PluginBuild) {
    build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => ({
      path: args.path,
      namespace: 'a',
    }));

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
      return {
        loader: 'jsx',
        contents: 'export default "hi there!"',
      };
    });
  },
});
