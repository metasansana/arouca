import Route from './Route';
import Registry from './Registry';
import events from 'events';

/**
 * Called when a Route has been activated.
 * @callback handler
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 */

/**
 * Router provides an api for executing code when the browser hash changes.
 * It does this by listening for a 'hashchange' event. Add an instance
 * of Router with `window.addEventListener` to get to work.
 */
class Router {

  constructor(window=null) {

    this.registry = new Registry(this);
    this._events = new events.EventEmitter();
    this.HASH_CHANGED = 'hashchange';

    if(window != null)
      window.addEventListener(this.HASH_CHANGED, this);

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

  once() {

    this._events.once.apply(this._events, arguments);
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

    this.registry.register(path, (typeof cb === 'object') ?
      cb.onActive.bind(cb) : cb);
    return this;

  }

  /**
   * use sets up middleware for all routes
   * @param {handler} cb
   */
  use(cb) {

    this.registry.register(null, (typeof cb === 'object') ?
      cb.onActive.bind(cb) : cb);

    return this;

  }

}
export default Router

