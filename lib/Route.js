'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _Response = require('./Response');

var _Response2 = _interopRequireDefault(_Response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Route is used for routes we check the path against a regular expression before executing.
 * @implements {Routable}
 * @param {RegExp} regex 
 * @param {array<object>} keys 
 * @param {handler} handler 
 */

var Route = function () {
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

            if (result === null) return next();

            this._handler(_Request2.default.create(path, query, this.keys, result), new _Response2.default(router), next);
        }
    }]);

    return Route;
}();

exports.default = Route;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Sb3V0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTTSxLO0FBRUYsbUJBQVksS0FBWixFQUFtQixJQUFuQixFQUF5QixPQUF6QixFQUFrQztBQUFBOztBQUM5QixhQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsYUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUssUUFBTCxHQUFnQixPQUFoQjtBQUNIOzs7O2lDQUVRLEksRUFBTSxLLEVBQU8sSSxFQUFNLE0sRUFBUTs7QUFFaEMsZ0JBQUksU0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQWhCLENBQWI7O0FBRUEsZ0JBQUksV0FBVyxJQUFmLEVBQ0ksT0FBTyxNQUFQOztBQUVKLGlCQUFLLFFBQUwsQ0FDSSxrQkFBUSxNQUFSLENBQWUsSUFBZixFQUNJLEtBREosRUFFSSxLQUFLLElBRlQsRUFHSSxNQUhKLENBREosRUFJaUIsdUJBQWEsTUFBYixDQUpqQixFQUl1QyxJQUp2QztBQU1IOzs7Ozs7a0JBR1UsSyIsImZpbGUiOiJSb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0IGZyb20gJy4vUmVxdWVzdCc7XG5pbXBvcnQgUmVzcG9uc2UgZnJvbSAnLi9SZXNwb25zZSc7XG5cbi8qKlxuICogUm91dGUgaXMgdXNlZCBmb3Igcm91dGVzIHdlIGNoZWNrIHRoZSBwYXRoIGFnYWluc3QgYSByZWd1bGFyIGV4cHJlc3Npb24gYmVmb3JlIGV4ZWN1dGluZy5cbiAqIEBpbXBsZW1lbnRzIHtSb3V0YWJsZX1cbiAqIEBwYXJhbSB7UmVnRXhwfSByZWdleCBcbiAqIEBwYXJhbSB7YXJyYXk8b2JqZWN0Pn0ga2V5cyBcbiAqIEBwYXJhbSB7aGFuZGxlcn0gaGFuZGxlciBcbiAqL1xuY2xhc3MgUm91dGUge1xuXG4gICAgY29uc3RydWN0b3IocmVnZXgsIGtleXMsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yZWdleCA9IHJlZ2V4O1xuICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShwYXRoLCBxdWVyeSwgbmV4dCwgcm91dGVyKSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMucmVnZXguZXhlYyhwYXRoKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIG5leHQoKTtcblxuICAgICAgICB0aGlzLl9oYW5kbGVyKFxuICAgICAgICAgICAgUmVxdWVzdC5jcmVhdGUocGF0aCxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMsXG4gICAgICAgICAgICAgICAgcmVzdWx0KSwgbmV3IFJlc3BvbnNlKHJvdXRlciksIG5leHQpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZVxuIl19