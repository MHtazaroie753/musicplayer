const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
port:process.env.DB_PORT,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
    logging: false,
    timezone: "+03:30",
  }
);
const db = {};
sequelize
  .authenticate()
  .then(() => {
    console.log("sequelize connected successfully");
  })
  .catch((err) => {
    console.log("sequelize has error in connection", err);
  });
db.User = sequelize.import("../models/sequelize/user.js");
db.Song = sequelize.import("../models/sequelize/songs.js");
sequelize.sync();
module.exports = db;
