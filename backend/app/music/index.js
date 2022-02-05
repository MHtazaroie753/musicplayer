const mm = require("music-metadata");
const util = require("util");

module.exports = (async () => {
  try {
    const metadata = await mm.parseFile("./app/music/Amir Tataloo - Jomeha.mp3");
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  } catch (error) {
    console.error( error.message);
  }
})();
