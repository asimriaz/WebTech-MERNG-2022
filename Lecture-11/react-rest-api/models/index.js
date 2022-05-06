
const mongoose = require('mongoose');
(async()=>{
    await mongoose.connect('mongodb://localhost:27017/recapsheet');
})();

module.exports = {
    Student: require('./Student'),
}