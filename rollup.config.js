import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

export default [
  {
    input: 'lib/index.js',
    output: {
      name: 'vDOM',
      file: 'dist/vdom.umd.js',
      format: 'umd',
    },
    plugins: [resolve(), filesize()],
  },
  {
    input: 'lib/index.js',
    output: [{ file: 'dist/vdom.cjs.js', format: 'cjs' }, { file: 'dist/vdom.esm.js', format: 'es' }],
    plugins: [resolve(), filesize()],
  },
];
