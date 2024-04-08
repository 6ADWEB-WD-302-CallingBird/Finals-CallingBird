var contactModel = require('../models/contactModel');

module.exports.createContactService = (contactDetails,userEmail) => {

    return new Promise(function myFn(resolve, reject) {
 
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

 module.exports.getContactService= (userEmail)=> {
  
  return new Promise(function myFn(resolve, reject) {

    contactModel.findOne({email:userEmail},(error,result) => {
      if (error) {
        reject(false);
    } else {
      resolve(result);
    }

    })
 })
}

module.exports.deleteContactService= (useremail,contactID)=> {
  
  return new Promise(function myFn(resolve, reject) {

    contactModel.update({email:useremail},{$pull: 
      {
        contactList : {_id : contactID}
    }}

    ,(error,result) => {
      if (error) {
        reject(false);
    } else {
      resolve(true);
    }

    })
 })
}

module.exports.updateContactService = (contactDetails,contactID) => {

  return new Promise(function myFn(resolve, reject) {


       contactModel.updateOne({'contactList._id':contactID}, { $set : {
       
          'contactList.$': {
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