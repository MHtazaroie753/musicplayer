const authService = require("./authService");
const e = require("express");
exports.allSongs = async (req, res) => {

  const file = req.files.file;



      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
};
