// models/Market.js

const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema(
  {
    marketName: {
      type: String,
      required: true
    },

    district: {
      type: String,
      required: true,
      index: true
    },

    state: {
      type: String,
      required: true
    },

    crop: {
      type: String,
      required: true
    },

    averagePrice: {
      type: Number,
      required: true
    },

    arrivalQuantity: {
      type: Number
    },

    demandIndex: {
      type: Number,
      min: 0,
      max: 1
    },

    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Market", marketSchema);