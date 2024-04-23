const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema(
  {
    subcategorieType: {
      type: String,
    },
    title: {
      type: String,
    },
    brand: {
      type: String,
    },
    number: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("articles", ArticlesSchema);