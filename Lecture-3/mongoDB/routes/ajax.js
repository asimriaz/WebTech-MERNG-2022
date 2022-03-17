var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const db = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('ajax/index', { title: 'AJAX' });
});


/* GET users listing. */
router.get('/xhr-list', async function (req, res, next) {
    const courses = await db.Course.find().sort({ courseid: 1 });
    res.render('ajax/list',{courses});
});

/* GET users listing. */
router.get('/xhr-edit', async function (req, res, next) {
    const course = await db.Course.find({courseid: req.query.courseid});
    res.render('ajax/edit',{course: course[0]});
});


router.post('/xhr-save', async (req, res) => {
    console.log(req.body)
    const result = await db.Course.updateOne({courseid: req.body.courseid},
        {
            $set: req.body
        });
        res.send(result);
})


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('index',{ title: 'Express' });
// });

module.exports = router;
