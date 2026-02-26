// models/Crop.js

const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },

    category: {
      type: String,
      enum: ["Cereal", "Pulse", "Vegetable", "Fruit"],
      required: true
    },

    idealTemperatureMin: Number,
    idealTemperatureMax: Number,

    idealHumidityMin: Number,
    idealHumidityMax: Number,

    averageGrowthDays: {
      type: Number,
      required: true
    },

    season: {
      type: String,
      enum: ["Kharif", "Rabi", "Zaid"]
    },

    shelfLifeDays: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Crop", cropSchema);