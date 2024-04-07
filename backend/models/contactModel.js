var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    contactList: [{ 
            contactname: String,
            contactnumber: Number,
            contactemail: String
    }]
});

module.exports = mongoose.model('contacts', contactSchema);