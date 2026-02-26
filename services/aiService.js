// services/aiService.js

const axios = require('axios');
const logger = require('./loggerService');

const AI_BASE_URL = process.env.AI_SERVICE_URL;

exports.getPredictions = async (payload) => {
  try {
    const response = await axios.post(
      `${AI_BASE_URL}/recommendation`,
      payload
    );

    logger.info("AI prediction successful");

    return response.data;

  } catch (error) {
    logger.error("AI Service Error:", error.message);
    throw new Error("AI prediction failed");
  }
};