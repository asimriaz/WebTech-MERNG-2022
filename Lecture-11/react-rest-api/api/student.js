const router = require('express').Router()
const db = require('../models')


router.get('/',async (req, res)=>{
    const students = await db.Student.find();
    res.status(200).json(students);
})

router.get('/:regno',async (req, res)=>{
    const student = await db.Student.find({ regno: req.params.regno });
    res.status(200).json(student[0]);
})

module.exports = router