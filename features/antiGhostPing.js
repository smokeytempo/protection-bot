const logger = require('../utils/logger');
module.exports = (message, client) => {
  if (message.mentions.users.size > 0 || message.mentions.roles.size > 0) {
    logger(client, message.guild, 'Anti-Ghost Ping Detected', `A ghost ping was detected in a deleted message from ${message.author.tag}.`, 'BLURPLE');
  }
};
