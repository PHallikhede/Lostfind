const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["Lost", "Found"],
    required: true,
  },

  itemName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  returned: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);