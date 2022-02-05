const express = require('express');
const songRouter = express.Router();
const dashboardHandler = require('./songs/addNewSong/handler')
songRouter.post('/api/v1/dashboard/songs/upload', dashboardHandler.createSong);
module.exports = songRouter;