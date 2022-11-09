const mongoose = require('mongoose')

const xmasSchema = new mongoose.Schema({
    gift: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('xmas', xmasSchema)