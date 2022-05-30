
const mongoose = require('mongoose');
(async()=>{
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`);
})();

module.exports = {
    Student: require('./Student'),
}