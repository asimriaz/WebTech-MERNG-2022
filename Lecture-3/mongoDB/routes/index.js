var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
router.get('/', async function(req, res) {
  const courses = await db.Course.find();
  res.render('index', 
            { 
              title: 'Express', 
              courses 
            });
});

module.exports = router;
