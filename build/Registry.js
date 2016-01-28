'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _HotRoute = require('./HotRoute');

var _HotRoute2 = _interopRequireDefault(_HotRoute);

/**
 * Registry for Routes
 * @param {Router} router 
 * @property {array<Route>} routes - A list of all the routes registered here.
 */

var Registry = (function () {
    function Registry(router) {
        _classCallCheck(this, Registry);

        this.routes = [];
        this._router = router;
    }

    /**
     * regex produces a RegExp object from a path string
     * @param {string} str 
     * @param {array} keys An array that stores information regarding ':var' parameters in the path.
     * @return RegExp} description
     */

    _createClass(Registry, [{
        key: 'regex',
        value: function regex(str, keys) {
            return (0, _pathToRegexp2['default'])(str, keys);
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

            if (path === null) return this.routes.push(new _HotRoute2['default'](cb));

            this.routes.push(new _Route2['default'](this.regex(path, keys), keys, cb));
        }

        /**
         * run attempts to activate the routes stored in the registry
         * @param {string} path 
         * @param {string} query 
         */
    }, {
        key: 'run',
        value: function run(path, query) {

            var pending = this.routes.slice();
            var next;

            next = function (err) {

                if (err) return router.emit('error', err);

                if (pending.length !== 0) pending.shift().activate(path, query, next);
            };

            return next();
        }
    }]);

    return Registry;
})();

exports['default'] = Registry;
module.exports = exports['default'];