const PeerServer = require("peer").PeerServer;
const clientManager = require("./messenger/clientManager");

const server = new PeerServer({
  port: process.env.PEER_PORT,
  path: "/messenger",
});
const startPeerServer = () => {
  new clientManager(server);
};
module.exports = startPeerServer;
