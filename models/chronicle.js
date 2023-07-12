const mongoose = require('mongoose');
// const { ObjectId } = require('mongoose');
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
    title: {
        type: String,
        required: true
    },
    date: Date,
    entries: [entrySchema]
});

const entrySchema = new Schema({
    mood: {
        type: String,
        enum: ['Happy', 'Sad', 'Excited', 'Content', 'Angry', 'Content', 'Nervous', 'Calm', 'Overwhelmed', 'Other'],
        required: true
    },
    water: {
        type: String,
        enum: ['0-1', '2-3', '4-5', '6-7', '8+'],
        required: true
    },
    exercise: {
        type: String,
        enum: ['none', '30 min', '60 min', '90 min', '120 min+'],
        required: true
    },
    sleep: {
        type: String,
        enum: ['0-3', '3-6', '6-8', '8+'],
        required: true
    },
    anxiety: {
        type: String,
        enum: ['5 - Extremely Anxious', '4 - Very Anxious', '3 - Anxious', '2 - Very Little Anxious', '1 - No Anxiety'],
        required: true
    },
    journal: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Chronicle', chronicleSchema);