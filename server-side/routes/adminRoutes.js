const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/adminController");

router.post("/create", AdminController.createForm);
router.get("/forms", AdminController.getForms);
router.get("/forms/:id", AdminController.getForm);
module.exports = router;
