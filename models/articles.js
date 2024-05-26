const mongoose = require("mongoose");

const ArticlesSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },
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
    vehicleName: {
      type: String,
    },
    vehicleModel: {
      type: String,
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("articles", ArticlesSchema);