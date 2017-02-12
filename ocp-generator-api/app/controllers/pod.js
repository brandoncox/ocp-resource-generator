var express = require('express'),
  router = express.Router(),
  Pod = require('../models/pod');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/pod', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ pod: new Pod({title: "hello"}) }));
});
