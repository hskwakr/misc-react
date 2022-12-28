import * as esbuild from 'esbuild-wasm';

export const unpkgPathPlugin = () => ({
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
  },
});
