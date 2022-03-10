var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');

/* GET home page. */
router.get('/', async function(req, res) {
  const courses = await db.Course.find().sort({courseid: 1});
  res.render('index', 
      { 
        title: 'Express', 
        courses
      });
});

router.get('/Edit/:id', (req, res)=>{
  console.log(`courseid: ${req.params.id}`)
})

module.exports = router;
