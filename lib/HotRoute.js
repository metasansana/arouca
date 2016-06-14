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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ib3RSb3V0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFRTSxRO0FBRUYsc0JBQVksRUFBWixFQUFnQjtBQUFBOztBQUNaLGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDSDs7OztpQ0FFUSxJLEVBQU0sSyxFQUFPLEksRUFBTSxNLEVBQVE7O0FBRWhDLGlCQUFLLEVBQUwsQ0FBUSxrQkFBUSxNQUFSLENBQWUsSUFBZixFQUFxQixLQUFyQixFQUE0QixFQUE1QixFQUFnQyxFQUFoQyxDQUFSLEVBQTZDLEVBQTdDLEVBQWlELElBQWpELEVBQXVELE1BQXZEO0FBRUg7Ozs7OztrQkFHVSxRIiwiZmlsZSI6IkhvdFJvdXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9SZXF1ZXN0JztcblxuLyoqXG4gKiBIb3RSb3V0ZSBpcyB1c2VkIGZvciByb3V0ZXMgdGhhdCBhcmUgdG8gYmUgYWN0aXZhdGVkIHJlZ2FyZGxlc3Mgb2YgXG4gKiB0aGUgY3VycmVudCBwYXRoLlxuICogQGltcGxlbWVudHMge1JvdXRhYmxlfVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgXG4gKi9cbmNsYXNzIEhvdFJvdXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNiKSB7XG4gICAgICAgIHRoaXMuY2IgPSBjYjtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZShwYXRoLCBxdWVyeSwgbmV4dCwgcm91dGVyKSB7XG5cbiAgICAgICAgdGhpcy5jYihSZXF1ZXN0LmNyZWF0ZShwYXRoLCBxdWVyeSwgW10sIFtdKSwge30sIG5leHQsIHJvdXRlcik7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvdFJvdXRlXG4iXX0=