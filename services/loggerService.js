// services/loggerService.js

const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/app.log');

const writeLog = (level, message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error("Log write failed:", err);
  });
};

exports.info = (message) => writeLog("INFO", message);
exports.error = (message) => writeLog("ERROR", message);