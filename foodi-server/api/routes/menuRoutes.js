const express = require("express");
const Menu = require("../models/Menu");
const menuController = require("../controllers/menuControllers");
const router = express.Router();

// getr all menu items
router.get('/', menuController.getAllMenuItems)

module.exports = router;