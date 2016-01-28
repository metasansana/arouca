import Route from './Route';
import Registry from './Registry';
import events from 'events';

/**
 * Call when a route has been navigated to.
 * @callback
 * @param {Request} req 
 * @param {Response} res
 * @param {function} next 
 */

/**
 * Router provides an api for executing code when the browser hash changes.
 */
class Router {

    constructor() {
        this.registry = new Registry(this);
        this._events = new events.EventEmitter();
        this.HASH_CHANGED = 'hashchange';
    }

    handleEvent(e) {

        var hash = (window.location.hash) ?
            window.location.hash.replace(/^#/, '/').
        replace(/\/\//g, '/').
        split('?'): '/';

        this.registry.run(hash[0], hash[1] || null);

    }

    on() {

        this._events.on.apply(this._events, arguments);
        return this;

    }

    emit() {

        this._events.emit.apply(this._events, arguments);
        return this;

    }

    /**
     * get queues up a route to be executed.
     * @param {string|Regexp} path The path to activate the handler on
     * @param {handler} cb
     */
    get(path, cb) {

        this.registry.register(path, cb);
        return this;

    }

    /**
     * use sets up middleware for all routes
     * @param {handler} cb 
     */
    use(cb) {

        this.registry.register(null, cb);

    }

}
export default Router
