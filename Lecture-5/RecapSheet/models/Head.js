
const mongoose = require('mongoose');
const { Schema, model } = mongoose

const headSchema = new Schema({
    	hid: Number,
	headname: String,
	total: Number,
});

module.exports = model('Head', headSchema);

