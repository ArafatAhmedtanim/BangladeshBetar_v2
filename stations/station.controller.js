const express = require('express');
const router = express.Router();
const stationService = require('./station.service');

router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
  stationService
    .create(req.body)
    .then(()=>stationService
      .getAll()
      .then(stations => res.json(stations)))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  stationService
    .getAll()
    .then(stations => res.json(stations))
    .catch(err => next(err));
}


function getById(req, res, next) {
  stationService
    .getById(req.params.id)
    .then(station => (station ? res.json(station) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  console.log(req.body)
  stationService
    .update(req.params.id, req.body)
    .then(()=>stationService
      .getAll()
      .then(stations => res.json(stations)))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  stationService
    .delete(req.params.id)
    .then(()=>stationService
      .getAll()
      .then(stations => res.json(stations)))
    .catch(err => next(err));
}
