
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const gradeSchema = new Schema({
    	gradeid: Number,
	start: Number,
	end: Number,
	grade: String,
	gpa: Number,
});

module.exports = model('Grade', gradeSchema);

