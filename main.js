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
var jsfy = function (obj, spacing, endline, name) {
    var __done = [];

    if (!endline && endline !== '')
        endline = '';

    var __replace = function (str, find, replace) {
        return str.split(find).join(replace);
    };

    var __checkCircular = function (val, path) {
        if (~__done.indexOf(val))
            throw "ERROR: circular reference @ " + path;

        __done.push(val);
    };

    var __serialize = {
        function: function (obj) {
            return obj.toString();
        },
        number: function (obj) {
            return obj;
        },
        string: function (obj) {
            return '"' + __replace(obj, '"', '\\"') + '"';
        },
        boolean: function (obj) {
            return obj ? 'true' : 'false';
        },
        null: function () {
            return 'null';
        },
        undefined: function () {
            return 'undefined';
        },
        defered: function (obj) {
            return obj.toString();
        },
        object: function (obj, spacing, deep, path) {
            if (!path)
                path = '[Object]';
            __checkCircular(obj, path);

            // spacing 
            var _space = ' ', _len = spacing || 0;
            if (typeof spacing == 'string') {
                _space = spacing;
                _len = _space.length;
            }
            var _spacing0 = '';
            for (var i = 0; i < (deep - 1) * _len; i++)
                _spacing0 += _space;
            var _spacing1 = _spacing0;
            for (var i = 0; i < _len; i++)
                _spacing1 += _space;

            var _out = '';
            for (var key in obj) {
                // strange key
                var _key = key.match(/^\w[\d\w_]*$/) ? key : '"' + __replace(key, '"', '\\"') + '"';
                var _path = path + '.' + key;
                _out += ',' + endline + _spacing1 + _key + ':' + __main(obj[key], spacing, deep + 1, _path);
            }
            return '{' + _out.substr(1) + endline + _spacing0 + '}';
        },
        array: function (obj, spacing, deep, path) {
            if (!path)
                path = '[Array]';
            __checkCircular(obj, _path);

            var _out = '';
            for (var i = 0; i < obj.length; i++) {
                var _path = path + '#' + i;
                _out += ',' + __main(obj[i], spacing, deep, _path);
            }
            return '[' + _out.substr(1) + ']';
        },
        date: function (obj) {
            return 'new Date("' + obj.toISOString() + '")';
        },
        regexp: function (obj) {
            return obj.toString();
        }

    };

    var __main = function (obj, spacing, deep, path) {
        if (!deep)
            deep = 1;

        var _type = typeof obj;
        if (_type == 'object') {
            if (obj instanceof Array)
                _type = 'array';
            else if (obj instanceof Date)
                _type = 'date';
            else if (obj instanceof RegExp)
                _type = 'regexp';
            else if (obj instanceof jsfy.Defered)
                _type = 'defered';
            else if (obj === null)
                _type = 'null';
        }
        /// useless
        //if (!_type && obj === undefined)
        //  _type = 'undefined';

        return __serialize[_type](obj, spacing, deep, path);
    };

    if (name)
        return 'var ' + name + ' = ' + __main(obj, spacing) + ';';
    else
        return __main(obj, spacing);
};

jsfy.Defered = function (val) {
    this.val = val;
};
jsfy.Defered.prototype.toString = function () {
    return this.val
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = jsfy;
}
