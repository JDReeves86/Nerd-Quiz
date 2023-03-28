//connects to SQL database specified in .env file.
require("dotenv").config();
const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.AWSDB_URL,
      dialect: "mysql",
      port: 3306,
      dialectOptions: {
        ssl: "Amazon RDS",
      },
      logging: console.log,
      maxConcurrentQueries: 100,
      pool: { maxConnections: 5, maxIdleTime: 30 },
      language: "en",
    }
  );
}

module.exports = sequelize;
