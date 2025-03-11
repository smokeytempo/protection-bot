const antiGhostPing = require('../features/antiGhostPing');
module.exports = {
  name: 'messageDelete',
  async execute(message, client) {
    if (message.partial) return;
    antiGhostPing(message, client);
  }
};
