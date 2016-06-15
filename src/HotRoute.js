import Request from './Request';

/**
 * HotRoute is used for routes that are to be activated regardless of 
 * the current path.
 * @implements {Routable}
 * @param {function} cb 
 */
class HotRoute {

    constructor(cb) {
        this.cb = cb;
    }

    activate(path, query, next, router) {

        this.cb(Request.create(path, query, [], []), {}, next, router);

    }

}

export default HotRoute
