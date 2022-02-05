const songsService = require("./songsService");
const e = require("express");
const aa = require("./aa");
exports.createSong = async (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = await req.files.file;
  await file.mv(
    `${__dirname}/../../../../../../frontend/public/uploads/${file.name}`,
   async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
     await songsService.saveInDb(file.name);
     await res.send({
        tags: await songsService.getMetaData(file.name),
        fileName: file.name,
        filePath: `/uploads/${file.name}`,
      });
    }
  );
};
