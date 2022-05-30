
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const studentSchema = new Schema({
    regno: String,
	name: String,
});

module.exports = model('Student', studentSchema);

