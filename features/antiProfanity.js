const logger = require('../utils/logger');
module.exports = (message, client) => {
  const bannedWords = client.config.antiProfanity.bannedWords;
  const regex = new RegExp(`\\b(${bannedWords.join('|')})\\b`, 'i');
  if (regex.test(message.content)) {
    message.delete().catch(() => {});
    logger(client, message.guild, 'Anti-Profanity Triggered', `Message from ${message.author.tag} deleted for profanity.`, 'DARK_RED');
  }
};
