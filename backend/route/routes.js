var express = require('express');

var userController = require('../controllers/usercontroller');
const contactsController = require('../controllers/contactscontroller');
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn); //login and validation
router.route('/user/create').post(userController.createUserControllerFn); // create user account 

router.route('/user/find').get(userController.findUserControllerFn); //find all user
router.route('/user/find/:email').get(userController.findOneUserControllerFn); //find one user

router.route('/contacts/addcontact/:email').put(contactsController.addcontactControllerFn); //add contacts in your account

router.route('/contacts/:email').get(contactsController.getContactsFn); //get all contacts

router.route('/contacts/delete/:email/:id').put(contactsController.deleteContactFn); // delete using $pull.
router.route('/contacts/update/:id').put(contactsController.updatecontactFn); //


module.exports = router;