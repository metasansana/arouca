'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _Registry = require('./Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

/**
 * Called when a Route has been activated.
 * @callback handler
 * @param {Request} req 
 * @param {Response} res 
 * @param {function} next
 */

/**
 * Router provides an api for executing code when the browser hash changes.
 * It does this by listening for a 'hashchange' event. Add an instance
 * of Router with `window.addEventListener` to get to work.
 */

var Router = (function () {
    function Router() {
        console.log('this is ', this, ', instance of is ', Route);
        _classCallCheck(this, Router);

        this.registry = new _Registry2['default'](this);
        this._events = new _events2['default'].EventEmitter();
        this.HASH_CHANGED = 'hashchange';
    }

    _createClass(Router, [{
        key: 'handleEvent',
        value: function handleEvent(e) {

            var hash = window.location.hash ? window.location.hash.replace(/^#/, '/').replace(/\/\//g, '/').split('?') : '/';

            this.registry.run(hash[0], hash[1] || null);
        }
    }, {
        key: 'on',
        value: function on() {

            this._events.on.apply(this._events, arguments);
            return this;
        }
    }, {
        key: 'once',
        value: function once() {

            this._events.once.apply(this._events, arguments);
            return this;
        }
    }, {
        key: 'emit',
        value: function emit() {

            this._events.emit.apply(this._events, arguments);
            return this;
        }

        /**
         * get queues up a route to be executed.
         * @param {string|Regexp} path The path to activate the handler on
         * @param {handler} cb
         */
    }, {
        key: 'get',
        value: function get(path, cb) {

            this.registry.register(path, cb);
            return this;
        }

        /**
         * use sets up middleware for all routes
         * @param {handler} cb 
         */
    }, {
        key: 'use',
        value: function use(cb) {

            this.registry.register(null, cb);
        }
    }]);

    return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];
