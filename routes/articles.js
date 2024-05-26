const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/articles");
const { authMiddleware } = require("../middleware/authMiddleware");
const { getItems, getItem, createItem, deleteItem, updateItem } = require("../controllers/articles");

router.get("/", authMiddleware, getItems);

router.get("/:id", authMiddleware, getItem);

router.post("/", authMiddleware, validatorCreateItem, createItem);

router.delete("/:id", authMiddleware, deleteItem);

router.put("/:id", authMiddleware, updateItem)

module.exports = router