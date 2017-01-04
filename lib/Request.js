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
//# sourceMappingURL=Request.js.map