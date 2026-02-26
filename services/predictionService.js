// services/predictionService.js

const weatherService = require('./weatherService');
const mandiService = require('./mandiService');
const storageService = require('./storageService');
const aiService = require('./aiService');
const logger = require('./loggerService');

exports.generateFullPrediction = async ({
  crop,
  district,
  storageType,
  transitTime
}) => {
  try {
    // 1️⃣ Fetch Weather
    const weatherData = await weatherService.getWeather(district);

    // 2️⃣ Fetch Mandi Data
    const mandiData = await mandiService.getMandiData(district, crop);

    // 3️⃣ Prepare Storage
    const storageData = storageService.prepareStorageData(
      storageType,
      weatherData.humidity,
      weatherData.temperature,
      transitTime
    );

    // 4️⃣ Call AI Service
    const prediction = await aiService.getPredictions({
      crop,
      weatherData,
      mandiData,
      storageData
    });

    logger.info("Full prediction generated");

    return prediction;

  } catch (error) {
    logger.error("Prediction Service Error:", error.message);
    throw error;
  }
};