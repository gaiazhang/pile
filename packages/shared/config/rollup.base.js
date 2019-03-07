import alias from 'rollup-plugin-alias';
// import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import image from 'rollup-plugin-image';


export default {
  input: './src/index.js',
  plugins: [
    alias({
      resolve: ['.js'],
    }),
    image(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    resolve(),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',
    }),
    // eslint({
    //   include: ['src/**/*.js'],
    // }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
  external: ['react', 'react-dom', 'prop-types', 'classnames', '@pile/icon', '@pile/shared'],
};
