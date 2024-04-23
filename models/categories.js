const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      unique: true
    },
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    sections: [{
      image: {
        type: String
      },
      title: {
        type: String
      },
      key: {
        type: String
      }
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("categories", CategoriesSchema);