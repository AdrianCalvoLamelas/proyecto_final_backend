const mongoose = require("mongoose");

const VehiclesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    models: {
      type: Array
    }
  }
)

module.exports = mongoose.model("vehicles", VehiclesSchema);