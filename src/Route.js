import Request from './Request';
/**
 * Route
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

    /**
     * activate this Route. Only happens if the path matches.
     * @param {string} path 
     * @param {string} query 
     * @param {function} next
     */
    activate(path, query, next) {

        var result = this.regex.exec(path);

        if (result === null)
            return next(path, query, next);

        this._handler(
            Request.create(path,
                query,
                this.keys,
                result), {}, next);

    }
}

export default Route
