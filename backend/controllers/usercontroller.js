var userService = require('./userService');

var createUserControllerFn = async (req, res) => 
{
    try
    {
    var status = await userService.createService(req.body);

    if (status) {
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var findUserControllerFn = async (req,res) => {
    try {
         result = await userService.findService()
         res.json(result);
    }
    catch (error) {
        console.log(error)
    }
}

var findOneUserControllerFn = async (req,res) => {
    try {
         result = await userService.findOneService(req.params.email)
         res.send(result);
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { createUserControllerFn, loginUserControllerFn,findUserControllerFn,findOneUserControllerFn };