/**
 * Response 
 * @param {Router} router 
 */
class Response {

    constructor(router) {
        this._router = router;
    }

    /**
     * render triggers a view event so code elsewhere can render a view
     * @param {string} view 
     * @param {object} locals 
     */
    render(view, locals) {
        this._router.emit('render', view, locals);
    }

}
export default Response
