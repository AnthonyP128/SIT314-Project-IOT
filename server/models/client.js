const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        clientID: { type: String, required: true, unique: true },
        apartmentID: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        phone: { type: String, required: true }
    },
    { collection: 'client '}
);

const model = mongoose.model('UserSchema', UserSchema);
module.exports = model;