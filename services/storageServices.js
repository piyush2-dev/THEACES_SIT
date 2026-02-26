// services/storageService.js

exports.prepareStorageData = (storageType, humidity, temperature, transitTime) => {
  if (!storageType) {
    throw new Error("Storage type required");
  }

  const storageEncoding = {
    open: 0,
    warehouse: 1,
    cold_storage: 2
  };

  const encodedStorage = storageEncoding[storageType.toLowerCase()];

  if (encodedStorage === undefined) {
    throw new Error("Invalid storage type");
  }

  return {
    storageType,
    storageTypeEncoded: encodedStorage,
    humidity,
    temperature,
    transitTime
  };
};