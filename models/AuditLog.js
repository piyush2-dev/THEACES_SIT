// models/AuditLog.js

const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer"
    },

    metadata: {
      type: Object
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("AuditLog", auditLogSchema);