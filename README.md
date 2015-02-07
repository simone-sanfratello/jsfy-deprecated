# jsfy

[![NPM Version](http://img.shields.io/npm/v/jsfy.svg?style=flat)](https://www.npmjs.org/package/jsfy)
[![NPM Downloads](https://img.shields.io/npm/dm/jsfy.svg?style=flat)](https://www.npmjs.org/package/jsfy)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D68ATHPLKXT9G "Donate using Paypal")
[![Gratipay donate button](https://img.shields.io/gratipay/jsfy.svg?style=flat)](https://www.gratipay.com/simone-sanfratello/ "Donate using Gratipay")

Javascript Object full serialization, when JSON.stringify is not enough

## Npm Installation

    $ npm install jsfy

## Node.js Example

```js

var jsfy = require('jsfy');

var _test = {
    astring: 'katia',
    anarray: [1, 'alice', 'rico', 'mimi', 2, 3, new Date()],
    abool: true,
    anotherbool: false,
    anundefined: undefined,
    anull: null,
    anan: NaN,
    aclass: {
        afunction: function() { return 'hi'; },
        afloat: 7.8
    },
    aregexp: /(\w)+/,
    atree: {
        one: 1,
        two: 'two',
        three: {
            threeone: {
                1: '3.1'
            }
        },
        four: 4.01,
        five: 5
    }
};


console.log(jsfy(_test));

>> {astring:"katia",anarray:[1,"alice","rico","mimi",2,3,new Date("2015-02-07T00:01:52.247Z")],abool:true,anotherbool:false,anundefined:undefined,anull:null,anan:NaN,aclass:{afunction:function () { return 'hi'; },afloat:7.8},aregexp:/(\w)+/,atree:{one:1,two:"two",three:{threeone:{1:"3.1"}},four:4.01,five:5}}

```

## On Browser

    <script src="https://raw.githubusercontent.com/simone-sanfratello/jsfy/master/main.js"></script>

## Browser Example

```html

<script src="https://raw.githubusercontent.com/simone-sanfratello/jsfy/master/main.js">

    var _test = {
        astring: 'katia',
        anarray: [1, 'alice', 'rico', 'mimi', 2, 3, new Date()],
        abool: true,
        anotherbool: false,
        anundefined: undefined,
        anull: null,
        anan: NaN,
        aclass: {
            afunction: function() { return 'hi'; },
            afloat: 7.8
        },
        aregexp: /(\w)+/,
        atree: {
            one: 1,
            two: 'two',
            three: {
                threeone: {
                    1: '3.1'
                }
            },
            four: 4.01,
            five: 5
        }
    };

    console.log(jsfy(_test, 2, '\n'));
</script>
```

## jsdoc

```js
/**
 * Javascript Object serialization 
 * @param {*} obj 
 * @param {string|number} [spacing] code folding space, can be a string or a number for spaces; tupically use 2, 4 or \t with endline \n
 * @param {string} [endline] end of line string, typically \n or \r\n in windows os
 * @returns {string}
 * 
 * @example jsfy(theobject); 
 * @example jsfy(theobject, 2, '\n'); 
 * @example jsfy(theobject, '\t', '\n');
 */
```

## License

The MIT License (MIT)

Copyright (c) 2015 Simone Sanfratello

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
