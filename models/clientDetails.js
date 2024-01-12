const mongoose = require('mongoose');

// need to send(client - thank you mail) and receive(client details) email 
const clientDetailsSchema = new mongoose.Schema({
    clientName : { type: String},
    clientEmail : { type : String},
    clientPhoneNumber : { type: String},
    clientMessage : { type: String}
}, {
    timestamps: true,
});
    // create user mode
const clientDetailsModel = mongoose.model('contact_form_details', clientDetailsSchema);
module.exports = { clientDetailsModel };
