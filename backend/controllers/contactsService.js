var contactModel = require('../models/contactModel');
var mongoose = require('mongoose');


module.exports.createContact = (contactDetails,userEmail) => {

    return new Promise(function myFn(resolve, reject) {
 
        console.log(contactModel);
         contactModel.update({email:userEmail}, { $push : {
         
            contactList: {
                contactname: contactDetails.name,
                contactnumber: contactDetails.contactnumber,
                contactemail: contactDetails.email
            } }
        },
        
        function resultHandle(error, result) {

    
 
          if (error) {
              reject(false);
          } else {
            resolve(true);
          }
      });
       
    });
 }
