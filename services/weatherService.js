// services/weatherService.js

const axios = require('axios');
const logger = require('./loggerService');

const WEATHER_API_KEY = process.env.c6463f12cb68d0f60144269e67e7b65e;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

exports.getWeather = async (district) => {
  try {
    if (!district) {
      throw new Error("District is required for weather fetch");
    }

    const response = await axios.get(BASE_URL, {
      params: {
        q: district,
        appid: WEATHER_API_KEY,
        units: "metric"
      }
    });

    const data = response.data;

    const weatherData = {
      district,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      rainfall: data.rain ? data.rain["1h"] || 0 : 0,
      windSpeed: data.wind.speed
    };

    logger.info(`Weather fetched for ${district}`);

    return weatherData;

  } catch (error) {
    logger.error("Weather Service Error:", error.message);
    throw new Error("Failed to fetch weather data");
  }
};