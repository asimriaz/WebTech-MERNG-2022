const mongoose = require('mongoose')
const db = require('./models');

// db.Course.find()
// .then(courses => {
//     console.log(courses);
//     process.exit();
// })

(async()=>{
    try {
        const courses = await db.Course.find();
        console.log(courses);
    } catch (error) {}
    process.exit();
})();