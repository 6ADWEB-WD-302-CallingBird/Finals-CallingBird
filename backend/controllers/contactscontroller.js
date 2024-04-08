var contactService = require('./contactsService');

var addcontactControllerFn = async (req, res) => 
{
    try
    {
    var status = await contactService.createContactService(req.body,req.params.email);

    if (status) {
        res.send({ "status": true, "message": "Contact created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var getContactsFn = async (req,res) => {
    try {
         result = await contactService.getContactService(req.params.email)
         res.json(result);
    }
    catch (error) {
        console.log(error)
    }
}

var deleteContactFn = async (req,res) => {
    try {
         result = await contactService.deleteContactService(req.params.email,req.params.id)
         res.json({status: true, message: 'Contact Deleted.'});
    }
    catch (error) {
        console.log(error)
    }
}

var updatecontactFn = async (req, res) => 
{
    try
    {
    var status = await contactService.updateContactService(req.body,req.params.id);

    if (status) {
        res.send({ "status": true, "message": "Contact created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}



module.exports = {addcontactControllerFn, getContactsFn, deleteContactFn,updatecontactFn}