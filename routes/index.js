var express = require('express');
var router = express.Router();
 
var mongoose = require('mongoose');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

require('../models/query');
var Query = mongoose.model('Query');

router.post('/query', function (req, res) {
  var querycount = 1;
  new Query({ name: req.body.name, category: req.body.category, username: req.body.username, querycount: querycount })
      .save(function (err, Query) {
          console.log(Query)

      });
});


module.exports = router;
