var express = require('express');
var router = express.Router();
const db = require('../models')


/* GET home page. */
router.get('/', async function(req, res, next) {

  const heads = await db.Head.find().sort({ hid: 1 })

  const students = await db.Student.aggregate([
    { $lookup:{ from: 'marks',  localField: 'regno',  foreignField: 'regno',  as: 'scores' } },
  ])
  //console.log(students)   
  res.render('index', { title: 'Express', students, heads });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
