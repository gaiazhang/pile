# Pile [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![license Apache 2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](https://www.npmjs.com/package/pile)

[Pile](https://www.npmjs.com/package/pile-ui) Components build with [React](http://facebook.github.io/react/).




## Mobile Demo

[Mobile Demo](https://didi.github.io/pile.js/docs/)

![pile](http://es-static.xiaojukeji.com/static/web/activity/pile/pilejsqr05.png)




## Installation

With [npm](http://npmjs.com/):

If React is not installed

```js
npm install --save react react-dom
```

With React Installed

```js
npm install pile-ui --save
```

[![pile](https://nodei.co/npm/pile-ui.png)](https://www.npmjs.com/package/pile-ui)


import css

```js
import 'pile/dist/styles/pile.min.css'
```

import Pile

```js
// 引用方式一
import Pile from 'pile'
const {Button} = Pile

// 引用方式二
import {Button} from 'pile'

// 单个组件引用方式 （推荐使用，节省无用组件调用）
import Button from 'pile/dist/components/button'
```

按需加载
使用 babel-plugin-import
```js
//babel.config.js
      ['import', {
        libraryName: 'pile',
        camel2UnderlineComponentName: false,
        camel2DashComponentName: false,
        customName(name) {
          if (name) {
            return `pile/node_modules/@pile/${name}`;
          }
        },
      }],
```

## Example

We have several examples on the documentation. Here is the first one to get you started:

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import pile
import Pile from 'pile'
import 'pile/dist/styles/pile.min.css'
const {Button} = Pile

class App extends Component {
    render() {
        return (
            <Button>hello Pile</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));
```



## Development

```js
git clone git@github.com:didi/pile.js.git
cd pile.js
npm install
npm start
```


## Contributing

Welcome to contribute by creating issues or sending pull requests. See [Contributing Guide](.github/CONTRIBUTING.md) for guidelines.




## License

pile is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file.



