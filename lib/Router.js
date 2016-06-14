'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Route = require('./Route');

var _Route2 = _interopRequireDefault(_Route);

var _Registry = require('./Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);

        this.registry = new _Registry2.default(this);
        this._events = new _events2.default.EventEmitter();
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

            this.registry.register(path, (typeof cb === 'undefined' ? 'undefined' : _typeof(cb)) === 'object' ? cb.onActive.bind(cb) : cb);
            return this;
        }

        /**
         * use sets up middleware for all routes
         * @param {handler} cb 
         */

    }, {
        key: 'use',
        value: function use(cb) {

            this.registry.register(null, (typeof cb === 'undefined' ? 'undefined' : _typeof(cb)) === 'object' ? cb.onActive.bind(cb) : cb);
        }
    }]);

    return Router;
}();

exports.default = Router;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Sb3V0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVNLE07QUFFRixzQkFBYztBQUFBOztBQUNWLGFBQUssUUFBTCxHQUFnQix1QkFBYSxJQUFiLENBQWhCO0FBQ0EsYUFBSyxPQUFMLEdBQWUsSUFBSSxpQkFBTyxZQUFYLEVBQWY7QUFDQSxhQUFLLFlBQUwsR0FBb0IsWUFBcEI7QUFDSDs7OztvQ0FFVyxDLEVBQUc7O0FBRVgsZ0JBQUksT0FBUSxPQUFPLFFBQVAsQ0FBZ0IsSUFBakIsR0FDUCxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsT0FBckIsQ0FBNkIsSUFBN0IsRUFBbUMsR0FBbkMsRUFDSixPQURJLENBQ0ksT0FESixFQUNhLEdBRGIsRUFFSixLQUZJLENBRUUsR0FGRixDQURPLEdBR0MsR0FIWjs7QUFLQSxpQkFBSyxRQUFMLENBQWMsR0FBZCxDQUFrQixLQUFLLENBQUwsQ0FBbEIsRUFBMkIsS0FBSyxDQUFMLEtBQVcsSUFBdEM7QUFFSDs7OzZCQUVJOztBQUVELGlCQUFLLE9BQUwsQ0FBYSxFQUFiLENBQWdCLEtBQWhCLENBQXNCLEtBQUssT0FBM0IsRUFBb0MsU0FBcEM7QUFDQSxtQkFBTyxJQUFQO0FBRUg7OzsrQkFFTTs7QUFFSCxpQkFBSyxPQUFMLENBQWEsSUFBYixDQUFrQixLQUFsQixDQUF3QixLQUFLLE9BQTdCLEVBQXNDLFNBQXRDO0FBQ0EsbUJBQU8sSUFBUDtBQUVIOzs7K0JBRU07O0FBRUgsaUJBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsS0FBbEIsQ0FBd0IsS0FBSyxPQUE3QixFQUFzQyxTQUF0QztBQUNBLG1CQUFPLElBQVA7QUFFSDs7Ozs7Ozs7Ozs0QkFPRyxJLEVBQU0sRSxFQUFJOztBQUVWLGlCQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLElBQXZCLEVBQThCLFFBQU8sRUFBUCx5Q0FBTyxFQUFQLE9BQWMsUUFBZixHQUN6QixHQUFHLFFBQUgsQ0FBWSxJQUFaLENBQWlCLEVBQWpCLENBRHlCLEdBQ0YsRUFEM0I7QUFFQSxtQkFBTyxJQUFQO0FBRUg7Ozs7Ozs7Ozs0QkFNRyxFLEVBQUk7O0FBRUosaUJBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsSUFBdkIsRUFBOEIsUUFBTyxFQUFQLHlDQUFPLEVBQVAsT0FBYyxRQUFmLEdBQ3pCLEdBQUcsUUFBSCxDQUFZLElBQVosQ0FBaUIsRUFBakIsQ0FEeUIsR0FDRixFQUQzQjtBQUdIOzs7Ozs7a0JBR1UsTSIsImZpbGUiOiJSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGUgZnJvbSAnLi9Sb3V0ZSc7XG5pbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9SZWdpc3RyeSc7XG5pbXBvcnQgZXZlbnRzIGZyb20gJ2V2ZW50cyc7XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gYSBSb3V0ZSBoYXMgYmVlbiBhY3RpdmF0ZWQuXG4gKiBAY2FsbGJhY2sgaGFuZGxlclxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXEgXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXMgXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBuZXh0XG4gKi9cblxuLyoqXG4gKiBSb3V0ZXIgcHJvdmlkZXMgYW4gYXBpIGZvciBleGVjdXRpbmcgY29kZSB3aGVuIHRoZSBicm93c2VyIGhhc2ggY2hhbmdlcy5cbiAqIEl0IGRvZXMgdGhpcyBieSBsaXN0ZW5pbmcgZm9yIGEgJ2hhc2hjaGFuZ2UnIGV2ZW50LiBBZGQgYW4gaW5zdGFuY2VcbiAqIG9mIFJvdXRlciB3aXRoIGB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcmAgdG8gZ2V0IHRvIHdvcmsuXG4gKi9cbmNsYXNzIFJvdXRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IG5ldyBSZWdpc3RyeSh0aGlzKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IGV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5IQVNIX0NIQU5HRUQgPSAnaGFzaGNoYW5nZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZSkge1xuXG4gICAgICAgIHZhciBoYXNoID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA/XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcvJykuXG4gICAgICAgIHJlcGxhY2UoL1xcL1xcLy9nLCAnLycpLlxuICAgICAgICBzcGxpdCgnPycpOiAnLyc7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RyeS5ydW4oaGFzaFswXSwgaGFzaFsxXSB8fCBudWxsKTtcblxuICAgIH1cblxuICAgIG9uKCkge1xuXG4gICAgICAgIHRoaXMuX2V2ZW50cy5vbi5hcHBseSh0aGlzLl9ldmVudHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgb25jZSgpIHtcblxuICAgICAgICB0aGlzLl9ldmVudHMub25jZS5hcHBseSh0aGlzLl9ldmVudHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgZW1pdCgpIHtcblxuICAgICAgICB0aGlzLl9ldmVudHMuZW1pdC5hcHBseSh0aGlzLl9ldmVudHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHF1ZXVlcyB1cCBhIHJvdXRlIHRvIGJlIGV4ZWN1dGVkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlZ2V4cH0gcGF0aCBUaGUgcGF0aCB0byBhY3RpdmF0ZSB0aGUgaGFuZGxlciBvblxuICAgICAqIEBwYXJhbSB7aGFuZGxlcn0gY2JcbiAgICAgKi9cbiAgICBnZXQocGF0aCwgY2IpIHtcblxuICAgICAgICB0aGlzLnJlZ2lzdHJ5LnJlZ2lzdGVyKHBhdGgsICh0eXBlb2YgY2IgPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjYi5vbkFjdGl2ZS5iaW5kKGNiKSA6IGNiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2Ugc2V0cyB1cCBtaWRkbGV3YXJlIGZvciBhbGwgcm91dGVzXG4gICAgICogQHBhcmFtIHtoYW5kbGVyfSBjYiBcbiAgICAgKi9cbiAgICB1c2UoY2IpIHtcblxuICAgICAgICB0aGlzLnJlZ2lzdHJ5LnJlZ2lzdGVyKG51bGwsICh0eXBlb2YgY2IgPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjYi5vbkFjdGl2ZS5iaW5kKGNiKSA6IGNiKTtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUm91dGVyXG4iXX0=