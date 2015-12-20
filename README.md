# jsfy

[![NPM Version](http://img.shields.io/npm/v/jsfy.svg?style=flat)](https://www.npmjs.org/package/jsfy)
[![NPM Downloads](https://img.shields.io/npm/dm/jsfy.svg?style=flat)](https://www.npmjs.org/package/jsfy)

[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRV4AM2CA9F78 "Donate using Paypal")

Javascript Object full serialization, when JSON.stringify is not enough

Stringify using correct syntax for all js native variable types:
* string
* number
* boolean
* function
* Object
* Array
* Date
* Regexp
* undefined
* null
* Infinity
* NaN

Can use not yet defined vars using "jsfy.Defered" type.
Detect circular reference, if found throw exception.

## Npm Installation

    $ npm install jsfy

## Node.js Example

```js

var jsfy = require('jsfy');

var _test = {
    adefered: new jsfy.Defered('my.Custom.ENUM'), // my.Custom.ENUM is not yet defined
    astring: 'katia',
    anarray: [1, 'alice', 'rico', 'mimi', 2, 3, new Date()],
    aquoting: 'hi "mr ',
    abool: true,
    anotherbool: false,
    anundefined: undefined,
    anull: null,
    anan: NaN,
    ainfinity: Infinity,
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
    },
    "1astrangekey": 123,
    "strange-key_two": 0,
    normal_key: -1,
    "awful key ": 'a',
    "dotted.key.com": 'www',
    "very\".awsul.key": '123',
    "why use a string for a key? 'cause I can ...": "?'\""
};

console.log(jsfy(_test, null, null, 'mix'));
```
output
```
> var mix = {adefered:my.custom.ENUM,astring:"katia",anarray:[1,"alice","rico","mimi",2,3,new Date("2015-02-13T04:59:11.698Z")],aquoting:"hi \"mr ",abool:true,anotherbool:false,anundefined:undefined,anull:null,anan:NaN,ainfinity:Infinity,aclass:{afunction:function () { return 'hi'; },afloat:7.8},aregexp:/(\w)+/,atree:{one:1,two:"two",three:{threeone:{1:"3.1"}},four:4.01,five:5},1astrangekey:123,"strange-key_two":0,normal_key:-1,"awful key ":"a","dotted.key.com":"www","very\".awsul.key":"123","why use a string for a key? 'cause I can ...":"?'\""};

```

## On Browser

    <script src="https://rawgit.com/simone-sanfratello/jsfy/master/main.js"></script>

### Browser Example

```html

<script src="https://rawgit.com/simone-sanfratello/jsfy/master/main.js">

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

### Tonic Test

https://tonicdev.com/npm/jsfy

## jsdoc

```js
/**
 * Javascript Object serialization
 * @todo compression
 * @param {*} obj
 * @param {string|number} [spacing] code folding space, can be a string or a number for spaces; tipically use 2, 4 or \t with endline \n
 * @param {string} [endline] end of line string, typically \n or \r\n in windows os
 * @param {string} [name] prepend "var name = " and postpend ";"
 * @returns {string}
 *
 * @example jsfy(theobject);
 * @example jsfy(theobject, 2, '\n');
 * @example jsfy(theobject, '\t', '\n');
 * @example jsfy(theobject, null, null, 'data');
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
