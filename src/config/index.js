const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:admin@cluster0.dpbqxur.mongodb.net/?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const db = mongoose.connection;

module.exports = db;