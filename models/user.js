// models/Farmer.js

const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Farmer name is required"],
      trim: true,
      minlength: 3,
      maxlength: 100
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      match: /^[6-9]\d{9}$/
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

    landAreaInAcres: {
      type: Number,
      min: 0
    },

    primaryCrop: {
      type: String,
      required: true
    },

    preferredLanguage: {
      type: String,
      enum: ["English", "Hindi", "Marathi"],
      default: "English"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Virtual field
farmerSchema.virtual("farmerProfile").get(function () {
  return `${this.fullName} (${this.district})`;
});

module.exports = mongoose.model("Farmer", farmerSchema);