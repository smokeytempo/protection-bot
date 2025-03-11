const logger = require('../utils/logger');
module.exports = (message, client) => {
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  if (linkRegex.test(message.content)) {
    message.delete().catch(() => {});
    logger(client, message.guild, 'Anti-Link Triggered', `Message from ${message.author.tag} deleted for unauthorized link.`, 'YELLOW');
  }
};
