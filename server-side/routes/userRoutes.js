const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/create", UserController.createResponse);
router.get("/forms", UserController.getForms);
router.get("/forms/:id", UserController.getForm);

module.exports = router;
