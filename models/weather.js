// models/Weather.js

const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
      index: true
    },

    temperature: Number,
    humidity: Number,
    rainfall: Number,
    windSpeed: Number,

    recordedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Weather", weatherSchema);