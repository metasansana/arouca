/**
 * Response 
 * @param {Router} router 
 */
class Response {

    constructor(router) {
        this._router = router;
    }

    /**
     * redirect changes the route via updating the hash.
     * @param {string} path 
     * @returns {Response}
     */
    redirect(path) {

      window.location.hash = path;

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
