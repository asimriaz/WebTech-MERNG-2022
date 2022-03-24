const mongoose = require('mongoose');
const db = require('./models');

// db.Student.find()
// .then(students => {
//     students.map(async std => {
//         const result = await db.Mark.updateMany({ regno: std.regno}, {
//             $set:{
//                 student: std._id
//             }, 
//             $unset:{
//                 regno: ''
//             }
//         })
//         console.log(result)
//     })
// })

// db.Mark.find()
//     .populate('student')
//     .then(marks => console.log(JSON.stringify(marks, null, '\t')))

// db.Student.find().then(students => {
//     students.map(async std =>{
//         const marksId = await db.Mark.find({ regno: std.regno }).select({ _id: 1 })
//         //console.log(std.regno, marksId);
//         const result = await db.Student.updateOne({ regno: std.regno }, {
//             $push: {
//                 marks: marksId
//             }
//         })
//         console.log(result)
//     })
// })

db.Student.find()
    .populate('marks')
    .then(students => console.log(JSON.stringify(students, null, '\t')))

