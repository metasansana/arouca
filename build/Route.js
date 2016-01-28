'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

/**
 * Route
 * @param {RegExp} regex 
 * @param {array<object>} keys 
 * @param {handler} handler 
 */

var Route = (function () {
    function Route(regex, keys, handler) {
        _classCallCheck(this, Route);

        this.regex = regex;
        this.keys = keys;
        this._handler = handler;
    }

    /**
     * activate this Route. Only happens if the path matches.
     * @param {string} path 
     * @param {string} query 
     * @param {function} next
     */

    _createClass(Route, [{
        key: 'activate',
        value: function activate(path, query, next) {

            var result = this.regex.exec(path);

            if (result === null) return next(path, query, next);

            this._handler(_Request2['default'].create(path, query, this.keys, result), {}, next);
        }
    }]);

    return Route;
})();

exports['default'] = Route;
module.exports = exports['default'];