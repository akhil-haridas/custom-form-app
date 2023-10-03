const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

router.post("/register", AdminController.register);
// router.post("/login", UserController.login);
// router.post("/logout", UserController.logout);

module.exports = router;
