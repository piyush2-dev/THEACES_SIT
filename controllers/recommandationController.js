// controllers/recommendationController.js

const weatherService = require('../services/weatherService');
const mandiService = require('../services/mandiService');
const storageService = require('../services/storageService');
const aiService = require('../services/aiService');

exports.getRecommendation = async (req, res) => {
  try {
    const { crop, district, storageType, transitTime } = req.body;

    if (!crop || !district || !storageType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // 1️⃣ Get weather data
    const weatherData = await weatherService.getWeather(district);

    // 2️⃣ Get mandi data
    const mandiData = await mandiService.getMandiData(district, crop);

    // 3️⃣ Prepare storage data
    const storageData = storageService.prepareStorageData(
      storageType,
      weatherData.humidity,
      weatherData.temperature,
      transitTime
    );

    // 4️⃣ Call AI prediction service
    const prediction = await aiService.getPredictions({
      crop,
      weatherData,
      mandiData,
      storageData
    });

    return res.status(200).json(prediction);

  } catch (error) {
    console.error("Recommendation Error:", error);
    return res.status(500).json({ message: "Server Error" });
  }
};