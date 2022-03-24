
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const studentSchema = new Schema({
	regno: String,
	name: String,
	marks:[{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Mark'
	}]
});

module.exports = model('Student', studentSchema);

