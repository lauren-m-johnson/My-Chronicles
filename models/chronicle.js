const mongoose = require('mongoose');
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

const entrySchema = new Schema({
    mood: {
        type: String,
        enum: ['Happy', 'Sad', 'Excited', 'Content', 'Angry', 'Nervous', 'Calm', 'Overwhelmed', 'Other'],
        required: true
    },
    water: {
        type: String,
        enum: ['0-1', '2-3', '4-5', '6-7', '8+'],
        required: true
    },
    exercise: {
        type: String,
        enum: ['none', '30', '60', '90', '120+'],
        required: true
    },
    sleep: {
        type: String,
        enum: ['0-3', '3-6', '6-8', '8+'],
        required: true
    },
    anxiety: {
        type: String,
        enum: ['5', '4', '3', '2', '1'],
        required: true
    },
    journal: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const chronicleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: Date,
    entries: [entrySchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
});


module.exports = mongoose.model('Chronicle', chronicleSchema);