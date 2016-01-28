import mukalukoxs from 'path-to-regexp';
import Route from './Route';
import HotRoute from './HotRoute';

/**
 * Registry for Routes
 * @param {Router} router 
 * @property {array<Route>} routes - A list of all the routes registered here.
 */
class Registry {

    constructor(router) {
        this.routes = [];
        this._router = router;
    }

    /**
     * regex produces a RegExp object from a path string
     * @param {string} str 
     * @param {array} keys An array that stores information regarding ':var' parameters in the path.
     * @return RegExp} description
     */
    regex(str, keys) {
        return mukalukoxs(str, keys);
    }

    /**
     * register a handler for a route
     * If the path has a Route already registered for its id, no new object is created.
     * @param {string} path 
     * @param {handler} cb 
     */
    register(path, cb) {

        var keys = [];

        if(path === null)
          return this.routes.push(new HotRoute(cb));

        this.routes.push(new Route(this.regex(path, keys), keys, cb));

    }

    /**
     * run attempts to activate the routes stored in the registry
     * @param {string} path 
     * @param {string} query 
     */
    run(path, query) {

        var pending = this.routes.slice();
        var next;

        next = err => {

            if (err) return router.emit('error', err);

            if (pending.length !== 0)
                pending.shift().activate(path, query, next);

        };

        return next();

    }

}

export default Registry
