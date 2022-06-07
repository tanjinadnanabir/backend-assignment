const mongoose = require('mongoose');
// mongoose db config
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/walcart-category');

module.exports = {
    mongoose
};