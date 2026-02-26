// controllers/weatherController.js

const weatherService = require('../services/weatherService');

exports.getWeather = async (req, res) => {
  try {
    const { district } = req.params;

    if (!district) {
      return res.status(400).json({ message: "District is required" });
    }

    const weatherData = await weatherService.getWeather(district);

    return res.status(200).json(weatherData);

  } catch (error) {
    console.error("Weather Error:", error);
    return res.status(500).json({ message: "Failed to fetch weather" });
  }
};