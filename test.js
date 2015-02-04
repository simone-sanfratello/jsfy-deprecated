var jsfy = require('./main.js');

var _test = {
    astring: 'katia',
    anarray: [1, 'alice', 'rico', 'mimi', 2, 3, new Date()],
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
        four: 4.01
    }
};

console.log(jsfy(_test, 2, '\n'));
