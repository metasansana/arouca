import Request from './Request';
import Response from './Response';

/**
 * Route is used for routes we check the path against a regular expression before executing.
 * @implements {Routable}
 * @param {RegExp} regex 
 * @param {array<object>} keys 
 * @param {handler} handler 
 */
class Route {

    constructor(regex, keys, handler) {
        this.regex = regex;
        this.keys = keys;
        this._handler = handler;
    }

    activate(path, query, next, router) {

        var result = this.regex.exec(path);

        if (result === null)
            return next(path, query, next);

        this._handler(
            Request.create(path,
                query,
                this.keys,
                result), new Response(router), next);

    }
}

export default Route
