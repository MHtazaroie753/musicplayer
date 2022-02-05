const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "song",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(128),
      },
      album_name: {
        type: Sequelize.STRING(128),
      },
      album_index: {
        type: Sequelize.INTEGER,
      },
      artist_name: {
        type: Sequelize.STRING(128),
      },
      genre: {
        type: Sequelize.STRING(64),
      },
      year: {
        type: Sequelize.INTEGER(4),
      },
      song_status: {
        type: Sequelize.INTEGER(2),
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    { freezeTableName: true, tableName: "songs" }
  );
};
