const express = require('express');
const router = express.Router();
const manufacturerService = require('./manufacturer.service');

router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
  manufacturerService
    .create(req.body)
    .then(()=>manufacturerService
      .getAll()
      .then(manufacturers => res.json(manufacturers)))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  manufacturerService
    .getAll()
    .then(manufacturers => res.json(manufacturers))
    .catch(err => next(err));
}


function getById(req, res, next) {
  manufacturerService
    .getById(req.params.id)
    .then(manufacturer => (manufacturer ? res.json(manufacturer) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  console.log(req.body)
  manufacturerService
    .update(req.params.id, req.body)
    .then(()=>manufacturerService
      .getAll()
      .then(manufacturers => res.json(manufacturers)))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  manufacturerService
    .delete(req.params.id)
    .then(()=>manufacturerService
      .getAll()
      .then(manufacturers => res.json(manufacturers)))
    .catch(err => next(err));
}
