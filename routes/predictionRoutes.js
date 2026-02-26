// routes/predictionRoutes.js

const express = require('express');
const router = express.Router();

// Get All Predictions
router.get('/', async (req, res) => {
  try {
    const predictions = await Prediction.find()
      .populate('farmer')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: predictions.length,
      predictions
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Analytics Route
router.get('/analytics/summary', async (req, res) => {
  try {
    const totalPredictions = await Prediction.countDocuments();

    const highRiskCount = await Prediction.countDocuments({
      spoilageRisk: "High"
    });

    res.status(200).json({
      success: true,
      totalPredictions,
      highRiskCount,
      safePredictions: totalPredictions - highRiskCount
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;