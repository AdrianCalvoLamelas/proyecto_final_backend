const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      unique: true
    },
    sections: [{
      image: {
        type: String
      },
      title: {
        type: String
      }
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("categories", CategoriesSchema);