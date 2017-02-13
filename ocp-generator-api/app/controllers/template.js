var express = require('express'),
  router = express.Router(),
  Template = require('../models/template');
  Pod = require('../models/pod');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/template', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(
    JSON.stringify({ template: new Pod({title: "hello"})
  })
  );

});
