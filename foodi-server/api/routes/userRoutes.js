const express = require("express");
const User = require("../models/User");
const router = express.Router();

const userController = require('../controllers/userControllers')

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.delete('/', userController.deleteUser)

module.exports = router;
