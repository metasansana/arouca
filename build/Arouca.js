/**
 * @typedef {Object} RoutingDef
 * @property {Array<Route>} routes
 */

/**
 * @typedef {Object} Route
 * @property {string} href
 * @property {*} view
 * @property {Object|Function} controller
 */

/**
 * Arouca is the main class of this library.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Arouca = (function () {
  function Arouca() {
    _classCallCheck(this, Arouca);

    this.controllers = {};
    this.routes = [];
  }

  /**
   * controller adds a controller to the internal list.
   * @param {string} name
   * @param {Object} controller
   * @returns {Arouca}
   */

  _createClass(Arouca, [{
    key: 'controller',
    value: function controller(name, value) {

      this.controllers[name] = value;
      return this;
    }

    /**
     * route adds a route to the internal stack.
     * @param {RoutingDef} def
     * @returns {Arouca}
     */
  }, {
    key: 'route',
    value: function route(def) {
      var _this = this;

      if (!Array.isArray(def.routes)) throw new Error('Routing definition without routes section received!');

      def.routes.forEach(function (r) {
        _this.routes.push(r);
      });
    }
  }]);

  return Arouca;
})();

exports['default'] = Arouca;
module.exports = exports['default'];