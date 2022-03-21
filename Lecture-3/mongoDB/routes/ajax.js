var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

/* GET home page. */
router.get('/', async function (req, res) {
    res.render('ajax/index',{title: 'AJAX'});
});

/* GET home page. */
router.get('/xhr-list', async function (req, res) {
    const courses = await db.Course.find().sort({courseid: 1});
    res.render('ajax/list',{title: 'AJAX', courses});
});

router.get('/xhr-edit', async function (req, res) {
    console.log(`courseid >> ${req.query.courseid}`)
    const course = await db.Course.find({courseid: req.query.courseid});
    res.render('ajax/edit',{title: 'AJAX', course: course[0]});
});

router.post('/xhr-save', async function (req, res) {

    console.log(req.body)
    const result  = await db.Course.updateOne({courseid: req.body.courseid}, 
        {
            $set: req.body
        })
    res.send(result)
    // res.redirect('/')
});
module.exports = router;
