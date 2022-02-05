var jsmediatags = require("jsmediatags");
const db = require("../../../../../db/connection/sequelize");

exports.saveInDb = (params) => {
  jsmediatags.read(`http://localhost:3000/uploads/${params}`, {
    onSuccess: function (tag) {
      var songData = {
        title: tag.tags.title,
        album_name: tag.tags.album,
        album_index: tag.tags.track,
        artist_name: tag.tags.artist,
        genre: tag.tags.genre,
        year: tag.tags.year,
        song_status: 1,
      };
      db.Song.create(songData);
    },
    onError: function (error) {
      console.log(":(", error.type, error.info);
    },
  });
};

exports.getMetaData = async (title) => {
  console.log(title);
  const song = await db.Song.findOne({ where: {title: 'Ye Chizi Begoo (Ft Armin 2AFM)'} });
  if (song) {
    return song;
  } else {
    return "dddd" + false;
  }
};
