// routes/marketRoutes.js

const express = require('express');
const router = express.Router();

// Add Market Record
router.post('/', async (req, res) => {
  try {
    const market = await Market.create(req.body);
    res.status(201).json({ success: true, market });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get Markets with Filters
router.get('/', async (req, res) => {
  try {
    const { district, crop, sortBy = "averagePrice" } = req.query;

    const filter = {};
    if (district) filter.district = district;
    if (crop) filter.crop = crop;

    const markets = await Market.find(filter)
      .sort({ [sortBy]: -1 });

    res.status(200).json({
      success: true,
      count: markets.length,
      markets
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;