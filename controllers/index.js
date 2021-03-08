var express = require('express'),
  router = express.Router(),
  Goal = require('../models/goal')

  //load the router module for goals

  router.use = ('/goals', require('./goals'))

  //define the home page route

  router.get('/', function (req, res) {
      Goal.all(function(err, result) {
        if (err) console.log(err)
        var obj = {
          goals: result,
          helpers: {
            formatCreatedAt: function() {
              return this.createdAt.toLocaleDateString()
            }
          }
        }
        res.render('index', obj)
      })
  })

  module.exports = router