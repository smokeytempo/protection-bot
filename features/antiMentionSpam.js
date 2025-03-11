const logger = require('../utils/logger');
module.exports = (message, client) => {
  const threshold = client.config.antiMentionSpam.threshold;
  if (message.mentions.users.size + message.mentions.roles.size > threshold) {
    message.delete().catch(() => {});
    logger(client, message.guild, 'Anti-Mention Spam Triggered', `Message from ${message.author.tag} deleted for excessive mentions.`, 'PURPLE');
  }
};
