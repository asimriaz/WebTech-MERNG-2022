const mongoose = require('mongoose');
const db = require('./models');

db.Student.find()
.then(students => {
    students.map(async std => {
        const result = await db.Mark.updateMany({regno: std.regno}, {
            $set:{
                student: std._id
            }
        })        
        console.log(result)
    })
}).then(()=> process.exit())

