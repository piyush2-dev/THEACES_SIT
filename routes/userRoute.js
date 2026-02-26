// routes/farmerRoutes.js

const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');

// Create Farmer
router.post('/', async (req, res) => {
  try {
    const farmer = await Farmer.create(req.body);
    res.status(201).json({ success: true, farmer });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get Farmers with Search & Pagination
router.get('/', async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;

    const query = search
      ? { fullName: { $regex: search, $options: "i" } }
      : {};

    const farmers = await Farmer.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Farmer.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: parseInt(page),
      farmers
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get Single Farmer
router.get('/:id', async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);

    if (!farmer) {
      return res.status(404).json({ success: false, message: "Farmer not found" });
    }

    res.status(200).json({ success: true, farmer });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Update Farmer
router.put('/:id', async (req, res) => {
  try {
    const updated = await Farmer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, updated });

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Delete Farmer
router.delete('/:id', async (req, res) => {
  try {
    await Farmer.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Farmer deleted" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;