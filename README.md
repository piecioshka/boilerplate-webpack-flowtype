# boilerplate-webpack-flowtype

🍴 Starter with Webpack & FlowType

## Features

* :white_check_mark: Webpack `v5.65.0`
* :white_check_mark: tcomb `v3.2.29`
* :white_check_mark: Babel (Core) `v7.16.5`

## How it's works?

![Scheme](./docs/scheme.png)

## How to use `FlowType`?

1. Install dependencies _(see: package.json)_
2. Define Babel plugins _(see: .babelrc)_
3. Define `webpack` settings _(see: webpack.config.js)_
4. Last, but not least add your code:

    ```javascript
    /* @flow */

    'use strict';

    function Person(name: string) {
        this.name = name;
    }

    let p = new Person('asd');
    console.log(p);
    ```

5. Run commands:

    ```bash
    npm run build   # build ES5 file from ES6 + FlowType
    npm run start   # execute ES5 code
    ```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2016-2021
