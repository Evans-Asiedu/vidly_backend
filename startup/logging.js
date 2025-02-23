const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
  // for handling unhandle and uncaught exceptions
  winston.handleExceptions(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  // winston transport for logging message unto files
  winston.add(winston.transports.File, { filename: "logfile.log" });
  winston.add(winston.transports.MongoDB, {
    db: "mongodb://localhost/vidlydb",
    level: "info",
  });
};
