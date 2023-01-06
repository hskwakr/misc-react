import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from '../plugin/unpkg-path-plugin';
import { fetchPlugin } from '../plugin/fetch-plugin';

let service: esbuild.Service | undefined;

export default async (rawCode: string) => {
  if (service == null) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  }

  const result = await service.build({
    entryPoints: ['index.js'],
    bundle: true,
    write: false,
    plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
    define: {
      'process.env.NODE_ENV': '"production"',
      global: 'window',
    },
  });

  return result.outputFiles[0].text;
};
