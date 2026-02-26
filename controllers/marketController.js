// controllers/marketController.js

const mandiService = require('../services/mandiService');

exports.getMarketData = async (req, res) => {
  try {
    const { district, crop } = req.query;

    if (!district || !crop) {
      return res.status(400).json({ message: "District and crop required" });
    }

    const mandiData = await mandiService.getMandiData(district, crop);

    return res.status(200).json(mandiData);

  } catch (error) {
    console.error("Market Error:", error);
    return res.status(500).json({ message: "Failed to fetch market data" });
  }
};