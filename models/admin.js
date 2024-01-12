const mongoose = require('mongoose');

// create user schema
const adminSchema = new mongoose.Schema({
    fullName: { type: String},
    email: { type: String },
    photo: { type: String},
    phoneNumber:{ type: String},
    aboutMe : { type: String}
}, {
    timestamps: true,
});
    // create user mode
const adminModel = mongoose.model('personal_details', adminSchema);
module.exports = { adminModel };
