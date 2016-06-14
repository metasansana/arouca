'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _HotRoute = require('./HotRoute');

var _HotRoute2 = _interopRequireDefault(_HotRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Registry for Routes
 * @param {Router} router The main router
 *
 * @property {array<Route>} routes - A list of all the routes registered here.
 */

var Registry = function () {
    function Registry(router) {
        _classCallCheck(this, Registry);

        this.routes = [];
        this._router = router;
    }

    /**
     * regex produces a RegExp object from a path string
     * @param {string} str 
     * @param {array} keys An array that stores information regarding ':var' parameters in the path.
     * @return {RegExp} description
     */


    _createClass(Registry, [{
        key: 'regex',
        value: function regex(str, keys) {
            return (0, _pathToRegexp2.default)(str, keys);
        }

        /**
         * register a handler for a route
         * If the path has a Route already registered for its id, no new object is created.
         * @param {string} path 
         * @param {handler} cb 
         */

    }, {
        key: 'register',
        value: function register(path, cb) {

            var keys = [];

            if (path === null) return this.routes.push(new _HotRoute2.default(cb));

            this.routes.push(new _Route2.default(this.regex(path, keys), keys, cb));
        }

        /**
         * run attempts to activate the routes stored in the registry
         * @param {string} path 
         * @param {string} query 
         */

    }, {
        key: 'run',
        value: function run(path, query) {
            var _this = this;

            var pending = this.routes.slice();
            var _next;

            _next = function next(err) {

                if (err) return _this._router.emit('error', err);

                if (pending.length !== 0) pending.shift().activate(path, query, _next, _this._router);
            };

            return _next();
        }
    }]);

    return Registry;
}();

exports.default = Registry;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0lBUU0sUTtBQUVGLHNCQUFZLE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsYUFBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUssT0FBTCxHQUFlLE1BQWY7QUFDSDs7Ozs7Ozs7Ozs7OzhCQVFLLEcsRUFBSyxJLEVBQU07QUFDYixtQkFBTyw0QkFBVyxHQUFYLEVBQWdCLElBQWhCLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7aUNBUVEsSSxFQUFNLEUsRUFBSTs7QUFFZixnQkFBSSxPQUFPLEVBQVg7O0FBRUEsZ0JBQUksU0FBUyxJQUFiLEVBQ0ksT0FBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLHVCQUFhLEVBQWIsQ0FBakIsQ0FBUDs7QUFFSixpQkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixvQkFBVSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLElBQWpCLENBQVYsRUFBa0MsSUFBbEMsRUFBd0MsRUFBeEMsQ0FBakI7QUFFSDs7Ozs7Ozs7Ozs0QkFPRyxJLEVBQU0sSyxFQUFPO0FBQUE7O0FBRWIsZ0JBQUksVUFBVSxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQWQ7QUFDQSxnQkFBSSxLQUFKOztBQUVBLG9CQUFPLG1CQUFPOztBQUVWLG9CQUFJLEdBQUosRUFBUyxPQUFPLE1BQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsR0FBM0IsQ0FBUDs7QUFFVCxvQkFBSSxRQUFRLE1BQVIsS0FBbUIsQ0FBdkIsRUFDSSxRQUFRLEtBQVIsR0FBZ0IsUUFBaEIsQ0FBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsS0FBdEMsRUFBNEMsTUFBSyxPQUFqRDtBQUVQLGFBUEQ7O0FBU0EsbUJBQU8sT0FBUDtBQUVIOzs7Ozs7a0JBSVUsUSIsImZpbGUiOiJSZWdpc3RyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWthbHVrb3hzIGZyb20gJ3BhdGgtdG8tcmVnZXhwJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL1JvdXRlJztcbmltcG9ydCBIb3RSb3V0ZSBmcm9tICcuL0hvdFJvdXRlJztcblxuLyoqXG4gKiBSZWdpc3RyeSBmb3IgUm91dGVzXG4gKiBAcGFyYW0ge1JvdXRlcn0gcm91dGVyIFRoZSBtYWluIHJvdXRlclxuICpcbiAqIEBwcm9wZXJ0eSB7YXJyYXk8Um91dGU+fSByb3V0ZXMgLSBBIGxpc3Qgb2YgYWxsIHRoZSByb3V0ZXMgcmVnaXN0ZXJlZCBoZXJlLlxuICovXG5jbGFzcyBSZWdpc3RyeSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlZ2V4IHByb2R1Y2VzIGEgUmVnRXhwIG9iamVjdCBmcm9tIGEgcGF0aCBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGtleXMgQW4gYXJyYXkgdGhhdCBzdG9yZXMgaW5mb3JtYXRpb24gcmVnYXJkaW5nICc6dmFyJyBwYXJhbWV0ZXJzIGluIHRoZSBwYXRoLlxuICAgICAqIEByZXR1cm4ge1JlZ0V4cH0gZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWdleChzdHIsIGtleXMpIHtcbiAgICAgICAgcmV0dXJuIG11a2FsdWtveHMoc3RyLCBrZXlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWdpc3RlciBhIGhhbmRsZXIgZm9yIGEgcm91dGVcbiAgICAgKiBJZiB0aGUgcGF0aCBoYXMgYSBSb3V0ZSBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIGl0cyBpZCwgbm8gbmV3IG9iamVjdCBpcyBjcmVhdGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFxuICAgICAqIEBwYXJhbSB7aGFuZGxlcn0gY2IgXG4gICAgICovXG4gICAgcmVnaXN0ZXIocGF0aCwgY2IpIHtcblxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzLnB1c2gobmV3IEhvdFJvdXRlKGNiKSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXMucHVzaChuZXcgUm91dGUodGhpcy5yZWdleChwYXRoLCBrZXlzKSwga2V5cywgY2IpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJ1biBhdHRlbXB0cyB0byBhY3RpdmF0ZSB0aGUgcm91dGVzIHN0b3JlZCBpbiB0aGUgcmVnaXN0cnlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgXG4gICAgICovXG4gICAgcnVuKHBhdGgsIHF1ZXJ5KSB7XG5cbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJvdXRlcy5zbGljZSgpO1xuICAgICAgICB2YXIgbmV4dDtcblxuICAgICAgICBuZXh0ID0gZXJyID0+IHtcblxuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHRoaXMuX3JvdXRlci5lbWl0KCdlcnJvcicsIGVycik7XG5cbiAgICAgICAgICAgIGlmIChwZW5kaW5nLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICAgICAgICBwZW5kaW5nLnNoaWZ0KCkuYWN0aXZhdGUocGF0aCwgcXVlcnksIG5leHQsIHRoaXMuX3JvdXRlcik7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dCgpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJ5XG4iXX0=