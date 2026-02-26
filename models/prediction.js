// models/Prediction.js

const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true
    },

    crop: {
      type: String,
      required: true
    },

    district: {
      type: String,
      required: true
    },

    harvestAdvice: {
      type: String,
      required: true
    },

    recommendedHarvestDays: Number,

    expectedMarket: String,

    expectedPrice: Number,

    priceConfidence: {
      type: Number,
      min: 0,
      max: 1
    },

    spoilageRisk: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true
    },

    spoilageProbability: {
      type: Number,
      min: 0,
      max: 1
    },

    explanation: {
      type: String
    },

    modelVersion: {
      type: String,
      default: "v1.0"
    }
  },
  {
    timestamps: true
  }
);

// Index for faster search
predictionSchema.index({ farmer: 1, createdAt: -1 });

module.exports = mongoose.model("Prediction", predictionSchema);