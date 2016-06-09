'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * HotRoute is used for routes that are to be activated regardless of 
 * the current path.
 * @implements {Routable}
 * @param {function} cb 
 */

var HotRoute = function () {
    function HotRoute(cb) {
        _classCallCheck(this, HotRoute);

        this.cb = cb;
    }

    _createClass(HotRoute, [{
        key: 'activate',
        value: function activate(path, query, next, router) {

            this.cb(_Request2.default.create(path, query, [], []), {}, next, router);
        }
    }]);

    return HotRoute;
}();

exports.default = HotRoute;
module.exports = exports['default'];