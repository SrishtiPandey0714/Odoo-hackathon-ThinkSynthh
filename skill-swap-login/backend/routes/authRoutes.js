const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");

// Make sure loginUser is a function!
router.post("/login", loginUser);

module.exports = router;
