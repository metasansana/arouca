import must from 'must';
import Route from '../src/Route';

var route;

beforeEach(function() {
    route = null;
});

describe('Route', function() {

    describe('activate', function() {

        it('should activate when its time has come', function() {

            var yes = false;

            var cb = function(req, res, next) {
                must(req.path).equal('/path/to/something');
                must(req.query).eql({
                    p: "1",
                    pp: "2",
                    ppp: "3"
                });
                yes = true;
                next();
            };

            route = new Route( /^\/path\/to\/something$/, [], cb);

            route.activate('/path/to/something', 'p=1&pp=2&ppp=3', () => {});
            must(yes).be(true);

        });

    });

});
