const mongoose = require('mongoose');
const db = require('./models');

// db.Student.find()
// .then(students => {
//     students.map(async std => {
//         const result = await db.Mark.updateMany({ regno: std.regno }, {
//             $set:{
//                 student: std._id
//             }
//         })
//         console.log(result);
//     })
// });

// db.Mark.find()
//     .populate('student')
// .then(marks => console.log(JSON.stringify(marks, null, '\t')))

// db.Student.find()
// .then(students => {
//     students.map(async std => {
//         const  markIds = await db.Mark.find({ regno: std.regno }).select({ _id: 1 })
//         //console.log(markIds);
//         const result = await db.Student.updateOne({ regno: std.regno }, {
//             $push:{
//                 marks: markIds
//             }
//         })
//         console.log(result)
//     })
// });

// db.Student.find()
//     .populate('marks')
// .then( students => console.log(JSON.stringify(students, null, '\t')))
db.Student.aggregate([
{ $lookup:{ from: 'marks',  localField: 'regno',  foreignField: 'regno',  as: 'scores' } },
 { $unwind: '$scores'},
 { $group:{ _id:{ regno: '$regno', name: '$name'},  total:{$sum: '$scores.marks'} }},
 { $project:{ _id: 0,  regno: '$_id.regno',  name: '$_id.name',  total: 1 }}])
 .then( students => console.log(JSON.stringify(students, null, '\t')))

