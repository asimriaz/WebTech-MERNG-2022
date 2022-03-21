var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('rest/index', { title: "REST" });
});

/* GET users listing. */
router.get('/xhr-list', async function (req, res, next) {
    const courses = await db.Course.find().sort({ courseid: 1 });
    res.status(200).json(courses)
});
/* GET users listing. */
router.get('/xhr-edit', async function (req, res, next) {
    console.log(req.query)
    const course = await db.Course.find({ courseid: req.query.courseid });
    console.log(course[0])
    res.status(200).json(course[0])
});

/* GET home page. */
router.post('/xhr-save', async function(req, res, next) {
    console.log(req.body);
    
    const result = await db.Course.updateOne({courseid: req.body.courseid}, 
        {
            $set: req.body
        })
    
        res.send(result)

    //     res.redirect('/')
    //res.render('index', { title: 'Express' });
  
});

module.exports = router;
