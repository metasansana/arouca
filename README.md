
Arouca
======

Simple express like client side router.

## Usage

```javascript

import Router from 'arouca/build/Router';

var router = new Router();

router.use(function(req, res, next) {
 console.log('middleware');
 next();
});

router.get('/', function(req, res, next) {

  alert('rendering application now!');

});

window.addEventListener(router.HASH_CHANGED, router); //It starts here

```

### API

This router does not support varadic arguments to `get` or `use`, instead
do :

```javascript

router.get('/', cb1);
router.get('/', cb2);
router.use(cb3);
router.use(cb3);

```

License 

Apache-2.0
