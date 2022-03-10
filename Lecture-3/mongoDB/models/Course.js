const mongoose = require('mongoose')
const{ Schema, model } = mongoose

const courseSchema = new Schema({
    courseid: Number, 
    code: String, 
    title: String, 
    crhr: Number,
    semester: Number    
});

module.exports = model("Course", courseSchema);