import must from 'must';
import Router from '../src/Router';

var router;
var called = false;

beforeEach(function() {
    window.removeEventListener('hashchange', router);
    router = new Router();
    window.addEventListener('hashchange', router);
    called = false;
    window.location.hash = '#';
});

describe('Router', function() {

    describe('get()', function() {

        it('should activate a route', function() {

            router.get('/search/:collection', function(req, res, next) {
                called = true;
                must(req.params.collection).equal('samples');
            });

            window.location.hash = '#/search/samples';
            router.handleEvent(new Event('hashchange'));
            must(called).equal(true);

        });

        it('should recognise # as /', function() {

            router.get('/', function(req, res, next) {
                called = true;
            });

            window.location.hash = '#';
            router.handleEvent(new Event('hashchange'));
            must(called).equal(true);

        });

        it('should recognise "" as ', function() {

                router.get('/', function(req, res, next) {
                    called = true;
                });

                window.location.hash = '';
                router.handleEvent(new Event('hashchange'));
                must(called).equal(true);

            });

        it('must parse path query variables', function() {

            router.get('/spreadsheet/locations/:worksheet', function(req) {
                must(req.query).exist();
                must(req.query.a).equal('1');
                must(req.query.b).equal('2');
                must(req.query.c).equal('3');
                called = true;
            });

            window.location.hash = '#/spreadsheet/locations/1?a=1&b=2&c=3';
            router.handleEvent(new Event('hashchange'));
            must(called).equal(true);

        });

        it('should execute middleware', function() {

            var count = 0;

            router.use(function(req, res, next) {
                count++;
                next();
            });

            router.use(function(req, res, next) {
                count++;
                next();
            });

            router.use(function(req, res, next) {
                count++;
            });

            router.get('/search', function(req, res, next) {
                called = true;
            });

            window.location.hash = '#/search';
            router.handleEvent(new Event('hashchange'));
            must(count).equal(3);
            must(called).equal(false);

        });

    });

});
