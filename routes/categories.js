const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, deleteItem } = require("../controllers/categories");
const { authMiddleware } = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getItems);
router.get("/:id", authMiddleware, getItem);
router.post("/", authMiddleware, createItem);
router.delete("/:id", authMiddleware, deleteItem);

module.exports = router;
