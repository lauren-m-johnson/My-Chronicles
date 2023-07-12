const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
const chronicles = require('../controllers/chronicles');
const Schema = mongoose.Schema;

module.exports = {
    deleteOne
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = chronicles.findIndex(chronicle => chronicle.id === id);
    chronicles.splice(idx, 1);
}

const chronicleSchema = new Schema({
    title: String,
    date: Date,
});

module.exports = mongoose.model('Chronicle', chronicleSchema);