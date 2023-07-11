const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chronicleSchema = new Schema({
    title: String,
    date: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Chronicle', chronicleSchema);