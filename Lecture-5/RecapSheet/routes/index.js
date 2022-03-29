var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');



/* GET home page. */
router.get('/', async function (req, res, next) {

	const grades = await db.Grade.find();
	const heads = await db.Head.find().sort({ hid: 1 });

	const students = await db.Student.aggregate([ 
		{ $lookup:{ from: 'marks',  localField: 'regno',  foreignField: 'regno', as: 'scores' }}])
	//console.log(students)


	res.render('index', { title: 'Express', students, heads, grades });
});

module.exports = router;
