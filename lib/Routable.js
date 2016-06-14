"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Routable is an interface for user defined routes.
 * @interface
 */

var Routable = function () {
  function Routable() {
    _classCallCheck(this, Routable);
  }

  _createClass(Routable, [{
    key: "activate",


    /**
     * activate will trigger this Routable
     * @param {string} path 
     * @param {string} query 
     * @param {function} next
     * @param {Router} router 
     */
    value: function activate(path, query, next, router) {}
  }]);

  return Routable;
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Sb3V0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlNLFE7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBU08sSSxFQUFNLEssRUFBTyxJLEVBQU0sTSxFQUFRLENBRW5DIiwiZmlsZSI6IlJvdXRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSb3V0YWJsZSBpcyBhbiBpbnRlcmZhY2UgZm9yIHVzZXIgZGVmaW5lZCByb3V0ZXMuXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmNsYXNzIFJvdXRhYmxlIHtcblxuICAgIC8qKlxuICAgICAqIGFjdGl2YXRlIHdpbGwgdHJpZ2dlciB0aGlzIFJvdXRhYmxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG5leHRcbiAgICAgKiBAcGFyYW0ge1JvdXRlcn0gcm91dGVyIFxuICAgICAqL1xuICAgIGFjdGl2YXRlKHBhdGgsIHF1ZXJ5LCBuZXh0LCByb3V0ZXIpIHtcblxuICAgIH1cbn1cbiJdfQ==