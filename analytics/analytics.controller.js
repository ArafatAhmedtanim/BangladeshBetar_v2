const express = require('express');
const router = express.Router();
const analyticsService = require('./analytics.service');

// routes
router.post('/analytics', authenticate);
router.get('/analytics', getAll)
module.exports = router;

function authenticate(req, res, next) {
  console.log(
    req.body.division,
    req.body.district,
    req.body.thana,
    req.body.time,
  );
  analyticsService
    .search(req.body.division, req.body.district, req.body.thana, req.body.time)
    .then(analytics =>
      analytics
        ? res.json(analytics)
        : res.status(400).json({ message: 'No Data' }),
    )
    .catch(err => next(err));
}

function getAll(req, res, next) {
  analyticsService
    .getAll()
    .then(analyticsData => res.json(analyticsData))
    .catch(err => next(err));
}