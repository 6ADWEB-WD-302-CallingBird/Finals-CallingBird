var contactService = require('./contactsService');

var addcontactControllerFn = async (req, res) => 
{
    try
    {
    var status = await contactService.createContact(req.body,req.params.email);

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

module.exports = {addcontactControllerFn}