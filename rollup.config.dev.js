import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'vDOM',
      file: 'demo/vdom.umd.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [resolve(), filesize()],
  },
  {
    input: 'lib/index.js',
    output: [
      { file: 'demo/vdom.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'demo/vdom.esm.js', format: 'es', sourcemap: true },
    ],
    plugins: [resolve(), filesize()],
  },
];
