const express = require("express");
const router = express.Router();

const {
  getArticle,
  addArticle,
  updateArticle,
  removeArticle,
} = require("../controllers/articleController");

router.get("/article", getArticle);
router.post("/article", addArticle);
router.put("/article/:id", updateArticle);
router.delete("/article/:id", removeArticle);

module.exports = router;
