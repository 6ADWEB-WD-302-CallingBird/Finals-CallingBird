var userModel = require('../models/userModel');
var contactModel = require('../models/contactModel');

var key = 'pleasedonthaveomgomgomg123456789';
var encryptor = require('simple-encryptor')(key);
var mongoose = require('mongoose');



module.exports.createService = (userDetails) => {

   


   return new Promise(function myFn(resolve, reject) {

       var userModelData = new userModel();
       var contactModelData = new contactModel();

       userModelData.firstname = userDetails.firstname;
       userModelData.lastname = userDetails.lastname;
       userModelData.email = userDetails.email;
       var encrypted = encryptor.encrypt(userDetails.password);
       userModelData.password = encrypted;


       contactModelData.email = userDetails.email;

       contactModelData.save(function resultHandle(error, result) {

         if (error) {
             reject(false);
         } else {

            userModelData.save(function resultHandle(error, result) {

               if (error) {
                   reject(false);
               } else {
                   resolve(true);
               }
           });
             
         }
     });
      

   });

}

module.exports.loginService = (userDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      userModel.findOne({ email: userDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);

               if(decrypted== userDetails.password)
               {
                  resolve({status: true,msg: "User Validated"});
               }
               else
               {
                  reject({status: false,msg: "Used Validation Failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Invalid Details"});
            }

         }
      
      });
      
   });
}

module.exports.findService = () => {

   return new Promise(function myFn(resolve, reject) {
      userModel.find({},function getresult(errorvalue, result)
{
   if(errorvalue) {
      reject('cannot find')
   }
   else {
      resolve(result);
   }
})

   })
}

module.exports.findOneService = (email) => {

   return new Promise(function myFn(resolve, reject) {
      userModel.findOne({email: email},function getresult(errorvalue, result)
{
   if(errorvalue) {
      reject('No Email')
   }
   else {
      if (result == null) {
      resolve(false)
      }
      else {
         resolve(true)
      };
   }
})

   })
}