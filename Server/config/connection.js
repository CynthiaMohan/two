const mongoose = require('mongoose');
// const password = require('../secrets')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clickertwo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
