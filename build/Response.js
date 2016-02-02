/**
 * Response 
 * @param {Router} router 
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Response = (function () {
    function Response(router) {
        _classCallCheck(this, Response);

        this._router = router;
    }

    /**
     * render triggers a view event so code elsewhere can render a view
     * @param {string} view 
     * @param {object} locals 
     */

    _createClass(Response, [{
        key: 'render',
        value: function render(view, locals) {
            this._router.emit('render', view, locals);
        }
    }]);

    return Response;
})();

exports['default'] = Response;
module.exports = exports['default'];