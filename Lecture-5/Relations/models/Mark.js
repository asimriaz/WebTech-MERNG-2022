
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const markSchema = new Schema({
    	mid: Number,
	regno: String,
	hid: Number,
	marks: Number,
	student:{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Student'
	}
});

module.exports = model('Mark', markSchema);

