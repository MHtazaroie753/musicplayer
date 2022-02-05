require('dotenv').config();
const startApp = require('./app/app')
const startPeerServer = require('./app/peer')
startApp();
startPeerServer();