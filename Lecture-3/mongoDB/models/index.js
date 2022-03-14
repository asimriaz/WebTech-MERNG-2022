
const mongoose = require('mongoose');

(async ()=>{
    await mongoose.connect('mongodb://localhost:27017/academic');
})()


module.exports = {
    Course: require('./Course')
}