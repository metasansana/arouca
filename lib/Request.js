'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Request is generated each time the user navigates.
 * @param {string} path 
 * @param {object} query 
 * @param {object} params 
 *
 * @property {string} path - The request path.
 * @property {object} query - If the hash contains a query part, it is treated as a query string.
 * @property {object} params - An object containing properties mapped to the named route “parameters”.
 */

var Request = function () {
    function Request(path, query, params) {
        _classCallCheck(this, Request);

        this.path = path;
        this.query = query;
        this.params = params;
    }

    /**
     * create a new Request object
     * @param {string} path
     * @param {string} query 
     * @param {array} keys 
     * @param {array} results 
     */


    _createClass(Request, null, [{
        key: 'create',
        value: function create(path, query, keys, results) {

            var params = Object.create(null);
            keys.forEach(function (key, index) {
                return params[key.name] = results[index + 1];
            });
            return new Request(path, _qs2.default.parse(query), params);
        }
    }]);

    return Request;
}();

exports.default = Request;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNLE87QUFFRixxQkFBWSxJQUFaLEVBQWtCLEtBQWxCLEVBQXlCLE1BQXpCLEVBQWlDO0FBQUE7O0FBQzdCLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsYUFBSyxNQUFMLEdBQWMsTUFBZDtBQUNIOzs7Ozs7Ozs7Ozs7OytCQVNhLEksRUFBTSxLLEVBQU8sSSxFQUFNLE8sRUFBUzs7QUFFdEMsZ0JBQUksU0FBUyxPQUFPLE1BQVAsQ0FBYyxJQUFkLENBQWI7QUFDQSxpQkFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sS0FBTjtBQUFBLHVCQUFnQixPQUFPLElBQUksSUFBWCxJQUFtQixRQUFRLFFBQVEsQ0FBaEIsQ0FBbkM7QUFBQSxhQUFiO0FBQ0EsbUJBQU8sSUFBSSxPQUFKLENBQVksSUFBWixFQUFrQixhQUFHLEtBQUgsQ0FBUyxLQUFULENBQWxCLEVBQW1DLE1BQW5DLENBQVA7QUFFSDs7Ozs7O2tCQUlVLE8iLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cbi8qKlxuICogUmVxdWVzdCBpcyBnZW5lcmF0ZWQgZWFjaCB0aW1lIHRoZSB1c2VyIG5hdmlnYXRlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBcbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aCAtIFRoZSByZXF1ZXN0IHBhdGguXG4gKiBAcHJvcGVydHkge29iamVjdH0gcXVlcnkgLSBJZiB0aGUgaGFzaCBjb250YWlucyBhIHF1ZXJ5IHBhcnQsIGl0IGlzIHRyZWF0ZWQgYXMgYSBxdWVyeSBzdHJpbmcuXG4gKiBAcHJvcGVydHkge29iamVjdH0gcGFyYW1zIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcGVydGllcyBtYXBwZWQgdG8gdGhlIG5hbWVkIHJvdXRlIOKAnHBhcmFtZXRlcnPigJ0uXG4gKi9cbmNsYXNzIFJlcXVlc3Qge1xuXG4gICAgY29uc3RydWN0b3IocGF0aCwgcXVlcnksIHBhcmFtcykge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGtleXMgXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVzdWx0cyBcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKHBhdGgsIHF1ZXJ5LCBrZXlzLCByZXN1bHRzKSB7XG5cbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4gcGFyYW1zW2tleS5uYW1lXSA9IHJlc3VsdHNbaW5kZXggKyAxXSk7XG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdChwYXRoLCBxcy5wYXJzZShxdWVyeSksIHBhcmFtcyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFxuIl19