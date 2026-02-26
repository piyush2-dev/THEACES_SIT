// services/mandiService.js


const logger = require('./loggerService');

exports.getMandiData = async (district, crop) => {
  try {
    if (!district || !crop) {
      throw new Error("District and crop are required");
    }

    const marketData = await Market.findOne({
      district,
      crop
    }).sort({ averagePrice: -1 });

    if (!marketData) {
      throw new Error("No market data found");
    }

    logger.info(`Mandi data fetched for ${district} - ${crop}`);

    return {
      marketName: marketData.marketName,
      averagePrice: marketData.averagePrice,
      arrivalQuantity: marketData.arrivalQuantity,
      demandIndex: marketData.demandIndex
    };

  } catch (error) {
    logger.error("Mandi Service Error:", error.message);
    throw error;
  }
};