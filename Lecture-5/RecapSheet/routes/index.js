var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {

  const heads = await db.Head.find().sort({ hid: 1 })
  const grades = await db.Grade.find()

  const students = await db.Student.aggregate([{ $lookup:{ from: 'marks',  localField: 'regno',  foreignField: 'regno',  as: 'scores' }}])
  res.render('index', { title: 'Express', students, heads, grades });
});

module.exports = router;
