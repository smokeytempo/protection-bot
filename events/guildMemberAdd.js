const antiRaid = require('../features/antiRaid');
const antiBotAdditions = require('../features/antiBotAdditions');
module.exports = {
  name: 'guildMemberAdd',
  async execute(member, client) {
    antiRaid(member, client);
    antiBotAdditions(member, client);
  }
};
