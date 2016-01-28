'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _Response = require('./Response');

var _Response2 = _interopRequireDefault(_Response);

/**
 * Route is used for routes we check the path against a regular expression before executing.
 * @implements {Routable}
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

    _createClass(Route, [{
        key: 'activate',
        value: function activate(path, query, next, router) {

            var result = this.regex.exec(path);

            if (result === null) return next(path, query, next);

            this._handler(_Request2['default'].create(path, query, this.keys, result), new _Response2['default'](router), next);
        }
    }]);

    return Route;
})();

exports['default'] = Route;
module.exports = exports['default'];