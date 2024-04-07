var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    contactList: [{ 
            contactname: String,
            contactnumber: String,
            contactemail: String
    }]
});

module.exports = mongoose.model('contacts', contactSchema);