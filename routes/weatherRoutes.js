// routes/weatherRoutes.js

const express = require('express');
const router = express.Router();

// Store Weather Data
router.post('/', async (req, res) => {
  try {
    const weather = await Weather.create(req.body);
    res.status(201).json({ success: true, weather });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get Recent Weather Data
router.get('/:district', async (req, res) => {
  try {
    const records = await Weather.find({ district: req.params.district })
      .sort({ recordedAt: -1 })
      .limit(7);

    res.status(200).json({
      success: true,
      records
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;