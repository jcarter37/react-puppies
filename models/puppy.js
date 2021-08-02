const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema (
    {
        name: {
            type: String, 
            required: true
        },
        breed: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 1
        }
    });

    module.exports = mongoose.model('Puppy', puppySchema);