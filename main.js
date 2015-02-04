/**
 * Javascript Object serialization 
 * @param {*} obj 
 * @param {string|number} spacing code folding space, can be a string or a number for spaces; tupically use 2, 4 or \t with endline \n
 * @param {string} endline end of line string, typically \n or \r\n in windows os
 * @returns {String}
 * @example jsfy(theobject, 2, '\n'); 
 * @example jsfy(theobject, '\t', '\n');
 */
var jsfy = function(obj, spacing, endline) {
    if(!endline && endline !== '') endline = '';
    
    var __serialize = {
        function: function(obj) {
            return obj.toString();
        },
        number: function(obj) {
            return obj;
        },
        string: function(obj) {
            return '"' + obj.toString() + '"';
        },
        object: function(obj, spacing, deep) {
            // spacing 
            var _space = ' ', _len = spacing;
            if(typeof spacing == 'string') {
                _space = spacing;
                _len = _space.length;
            }
            var _spacing0 = '';
            for(var i = 0; i < (deep-1)*_len; i++)
                _spacing0 += _space;
            var _spacing1 = _spacing0;
            for(var i = 0; i < _len; i++)
                _spacing1 += _space;
            
            var _out = '';
            for (var key in obj)
                _out += ',' + endline + _spacing1 + key + ': ' + __main(obj[key], spacing, deep+1);
            return '{' + _out.substr(1) + endline + _spacing0 + '}';
        },
        array: function(obj, spacing, deep) {
            var _out = '';
            for (var i = 0; i < obj.length; i++) {
                _out += ',' + __main(obj[i], spacing, deep);
            }
            return '[' + _out.substr(1) + ']';
        },
        date: function(obj) {
            return 'new Date("' + obj.toISOString() + '")';
        },
        regexp: function(obj) {
            return obj.toString();
        }
        
    };

    var __main = function(obj, spacing, deep) {
        // check if no need to do nothing
        if(obj === null || obj === undefined)
            return '';

        if(!deep)
            deep = 1;

        var _type = typeof obj;
        if (_type == 'object') {
            if(obj instanceof Array)
                _type = 'array';
            if(obj instanceof Date)
                _type = 'date';
            if(obj instanceof RegExp)
                _type = 'regexp';
        } 
        return __serialize[_type](obj, spacing, deep);
    };
    
    return __main(obj, spacing);
};

if(typeof window == 'undefined')
module.exports = jsfy;