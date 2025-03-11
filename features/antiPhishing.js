const logger = require('../utils/logger');
module.exports = (message, client) => {
  const patterns = client.config.antiPhishing.patterns;
  const regex = new RegExp(patterns.join('|'), 'i');
  if (regex.test(message.content)) {
    message.delete().catch(() => {});
    logger(client, message.guild, 'Anti-Phishing Triggered', `Message from ${message.author.tag} deleted for phishing attempt.`, 'DARK_MAGENTA');
  }
};
