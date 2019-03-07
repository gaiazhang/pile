import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import baseConfig from './rollup.base';
import { name, version, author } from '../package.json';

const rename = name.substr(6);

// banner
const banner = `${'/*!\n' + ' * '}${name}.js v${version}\n`
  + ` * (c) 2018-${new Date().getFullYear()} ${author}\n`
  + ' * Released under the MIT License.\n'
  + ' */';

// 支持输出 []
export default [
  // .js, .cjs.js, .esm.js
  {
    ...baseConfig,
    output: [
      // umd development version with sourcemap
      {
        file: `./lib/${rename}.js`,
        format: 'umd',
        name,
        banner,
        sourcemap: true,
      },
      // cjs and esm version
      {
        file: `./lib/${rename}.cjs.js`,
        format: 'cjs',
        banner,
      },
      // cjs and esm version
      {
        file: `./lib/${rename}.esm.js`,
        format: 'es',
        banner,
      },
    ],
    plugins: [...baseConfig.plugins, filesize()],
  },
  // .min.js
  {
    ...baseConfig,
    output: [
      // umd with compress version
      {
        file: `./lib/${rename}.min.js`,
        format: 'umd',
        name,
        banner,
      },
    ],
    plugins: [
      ...baseConfig.plugins,
      uglify(
        {
          compress: {
            drop_console: true,
          },
        },
        minify,
      ),
      filesize(),
    ],
  },
];
