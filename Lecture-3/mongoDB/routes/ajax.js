var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ajax/index', {title: "AJAX"});
});

/* GET users listing. */
router.get('/xhr-list', async function(req, res, next) {

  const courses = await db.Course.find().sort({courseid: 1});
  res.render('ajax/list', 
      { 
          title: 'AJAX', 
          courses 
      });  
});
/* GET users listing. */
router.get('/xhr-edit', async function(req, res, next) {
  console.log(req.query)
  // const courses = await db.Course.find().sort({courseid: 1});
  // res.render('ajax/list', 
  //     { 
  //         title: 'AJAX', 
  //         courses 
  //     });  
});

module.exports = router;
