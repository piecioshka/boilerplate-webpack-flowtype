/* @flow */

"use strict";

import "./index.html";

function Person(name: string) {
    this.name = name;
}

function main() {
    console.log("boilerplate-webpack-flowtype");
    const p = new Person("asd");
    console.log(p);
}

main();
