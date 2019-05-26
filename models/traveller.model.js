const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TravellerSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    birthDate: { type: Date, required: true },
    mobileNumber: { type: String, required: true, max: 100 }
});

// Export the model
module.exports = mongoose.model('Traveller', TravellerSchema);