/**
 * Routable is an interface for user defined routes.
 * @interface
 */
class Routable {

    /**
     * activate will trigger this Routable
     * @param {string} path 
     * @param {string} query 
     * @param {function} next
     * @param {Router} router 
     */
    activate(path, query, next, router) {

    }
}
