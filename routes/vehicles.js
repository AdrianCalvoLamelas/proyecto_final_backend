const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/vehicles");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getItems);

module.exports = router;