const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        apartmentID: { type: String, required: true, unique: true },
        clientID: { type: String, required: true },
        file: { type: String, required: true },
        lightOne: { type: String, required: true},
        lightTwo: { type: String, required: true },
        lightThree: { type: String, required: true}
    },
    { collection: 'apartment '}
);
const model = mongoose.model('UserSchema', UserSchema);
module.exports = model;