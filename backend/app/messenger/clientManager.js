class clientManager {
  constructor(peer) {
    this.peer = peer;
    this.peer.on("connection", this.connectionHandler);
  }
  connectionHandler(client) {
    console.log(client.id);
  }
}
module.exports = clientManager;
