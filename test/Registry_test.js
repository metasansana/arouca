import must from 'must';
import Registry from '../src/Registry';
import Route from '../src/Route';
import HotRoute from '../src/HotRoute';

var reg;

beforeEach(function() {
    reg = new Registry();
});

describe('Registry', function() {

    describe('regex()', function() {

        it('should turn a parameterized path into a Regexp', function() {

            var keys = [];
            var regex = reg.regex('/user/:realm/:stat/settings', keys);
            var result;

            must(regex instanceof RegExp).equal(true);

            result = regex.exec('/user/sky/clouds/settings');

            must(result).not.equal(null);
            must(result[1] === 'sky');
            must(result[2] === 'clouds');

        });

        describe('register', function() {

            it('should register a route', function() {

                must(reg.routes.length).equal(0);
                reg.register('/path', () => {});
                must(reg.routes[0] instanceof Route).equal(true);


            });

            it('should register middleware', function () {

              must(reg.routes.length).equal(0);
              reg.register(null, ()=>{});
              must(reg.routes[0] instanceof HotRoute).equal(true);

            });


        });



    });

});
