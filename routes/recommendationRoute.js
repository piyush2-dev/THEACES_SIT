// routes/recommendationRoutes.js

const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');


// Create new recommendation
router.post('/', async (req, res) => {
  try {
    const { farmerId, crop, district } = req.body;

    if (!farmerId || !crop || !district) {
      return res.status(400).json({
        success: false,
        message: "farmerId, crop, and district are required"
      });
    }

    await recommendationController.getRecommendation(req, res);

  } catch (error) {
    console.error("Recommendation Route Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
});

// Get recommendation history with filters
router.get('/history', async (req, res) => {
  try {
    const { farmerId, page = 1, limit = 10 } = req.query;

    const query = farmerId ? { farmer: farmerId } : {};

    const predictions = await Prediction.find(query)
      .populate('farmer')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Prediction.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      predictions
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;