var express = require('express');

var userController = require('../controllers/usercontroller');
const contactsController = require('../controllers/contactscontroller');
const router = express.Router();

router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/find').get(userController.findUserControllerFn); //find all user
router.route('/user/find/:email').get(userController.findOneUserControllerFn); //find one user

router.route('/user/addcontact/:email').put(contactsController.addcontactControllerFn)

module.exports = router;