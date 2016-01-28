import Request from './Request';
/**
 * HotRoute 
 * @param {function} cb 
 */
class HotRoute {

    constructor(cb) {
        this.cb = cb;
    }

    activate(path, query, next) {

        this.cb(Request.create(path, query, [], []), {}, next);

    }

}
export default HotRoute
