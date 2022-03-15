var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ajax/index', { title: 'AJAX' });
});

/* GET home page. */
router.get('/xhr-list', async function(req, res) {
  const courses = await db.Course.find().sort({courseid: 1});
  res.render('ajax/list', { title: 'Express', courses });
})

/* GET home page. */
router.get('/xhr-edit', async function(req, res) {
  const course = await db.Course.find({courseid: req.query.courseid});
  res.render('ajax/edit', { title: 'Express', course: course[0] });
})



/* POST Save. */
router.post('/xhr-save', async function(req, res) {
  console.log(req.body)
  const result = await db.Course.updateOne({courseid: req.body.courseid}, 
    {
      $set: req.body
    }
  )
  console.log(result);
  res.send(result);
  //res.render('index', { title: 'Express' });
  // res.redirect('/')
})


// /* GET home page. */
// router.get('/', async function(req, res) {
//   res.render('index', { title: 'Express' });
// })
module.exports = router;
