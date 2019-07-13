const express = require('express');
const router = express.Router();
const productService = require('./product.service');

router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
  productService
    .create(req.body)
    .then(()=>productService
      .getAll()
      .then(products => res.json(products)))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  productService
    .getAll()
    .then(products => res.json(products))
    .catch(err => next(err));
}


function getById(req, res, next) {
  productService
    .getById(req.params.id)
    .then(product => (product ? res.json(product) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  console.log(req.body)
  productService
    .update(req.params.id, req.body)
    .then(()=>productService
      .getAll()
      .then(products => res.json(products)))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  productService
    .delete(req.params.id)
    .then(()=>productService
      .getAll()
      .then(products => res.json(products)))
    .catch(err => next(err));
}
