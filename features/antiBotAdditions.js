const logger = require('../utils/logger');
module.exports = (member, client) => {
  if (member.user.bot) {
    const allowed = client.config.antiBotAdditions.allowed;
    if (!allowed.includes(member.user.id)) {
      member.kick('Unauthorized bot addition').catch(() => {});
      logger(client, member.guild, 'Anti-Bot Addition Triggered', `Bot ${member.user.tag} kicked for unauthorized addition.`, 'DARK_BLUE');
    }
  }
};
