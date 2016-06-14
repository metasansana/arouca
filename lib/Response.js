'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Response 
 * @param {Router} router 
 */

var Response = function () {
  function Response(router) {
    _classCallCheck(this, Response);

    this._router = router;
  }

  /**
   * redirect changes the route via updating the hash.
   * @param {string} path 
   * @returns {Response}
   */


  _createClass(Response, [{
    key: 'redirect',
    value: function redirect(path) {

      window.location.hash = path;
    }

    /**
     * render triggers a view event so code elsewhere can render a view
     * @param {string} view 
     * @param {object} locals 
     */

  }, {
    key: 'render',
    value: function render(view, locals) {
      this._router.emit('render', view, locals);
    }
  }]);

  return Response;
}();

exports.default = Response;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNwb25zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7SUFJTSxRO0FBRUYsb0JBQVksTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLLE9BQUwsR0FBZSxNQUFmO0FBQ0g7Ozs7Ozs7Ozs7OzZCQU9RLEksRUFBTTs7QUFFYixhQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsSUFBdkI7QUFFRDs7Ozs7Ozs7OzsyQkFPTSxJLEVBQU0sTSxFQUFRO0FBQ2pCLFdBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsUUFBbEIsRUFBNEIsSUFBNUIsRUFBa0MsTUFBbEM7QUFDSDs7Ozs7O2tCQUdVLFEiLCJmaWxlIjoiUmVzcG9uc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlc3BvbnNlIFxuICogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlciBcbiAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuXG4gICAgY29uc3RydWN0b3Iocm91dGVyKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHJvdXRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWRpcmVjdCBjaGFuZ2VzIHRoZSByb3V0ZSB2aWEgdXBkYXRpbmcgdGhlIGhhc2guXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAgICogQHJldHVybnMge1Jlc3BvbnNlfVxuICAgICAqL1xuICAgIHJlZGlyZWN0KHBhdGgpIHtcblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVuZGVyIHRyaWdnZXJzIGEgdmlldyBldmVudCBzbyBjb2RlIGVsc2V3aGVyZSBjYW4gcmVuZGVyIGEgdmlld1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3IFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2NhbHMgXG4gICAgICovXG4gICAgcmVuZGVyKHZpZXcsIGxvY2Fscykge1xuICAgICAgICB0aGlzLl9yb3V0ZXIuZW1pdCgncmVuZGVyJywgdmlldywgbG9jYWxzKTtcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlXG4iXX0=