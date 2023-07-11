const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chronicleSchema = new Schema({
    title: String,
    date: Date,
});

module.exports = mongoose.model('Chronicle', chronicleSchema);