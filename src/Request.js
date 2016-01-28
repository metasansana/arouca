import url from 'url';
import qs from 'qs';

/**
 * Request is generated each time the user navigates.
 * @param {string} path 
 * @param {object} query 
 * @param {object} params 
 *
 * @property {string} path - The request path.
 * @property {object} query - If the hash contains a query part, it is treated as a query string.
 * @property {object} params - An object containing properties mapped to the named route “parameters”.
 */
class Request {

    constructor(path, query, params) {
        this.path = path;
        this.query = query;
        this.params = params;
    }

    /**
     * create a new Request object
     * @param {string} path
     * @param {string} query 
     * @param {array} keys 
     * @param {array} results 
     */
    static create(path, query, keys, results) {

        var params = Object.create(null);
        keys.forEach((key, index) => params[key.name] = results[index + 1]);
        return new Request(path, qs.parse(query), params);

    }

}

export default Request
