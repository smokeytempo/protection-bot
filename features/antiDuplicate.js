const logger = require('../utils/logger');
const duplicateCache = new Map();
module.exports = (message, client) => {
  const config = client.config.antiDuplicate;
  const userId = message.author.id;
  const lastMessage = duplicateCache.get(userId);
  if (lastMessage && lastMessage.content === message.content) {
    message.delete().catch(() => {});
    logger(client, message.guild, 'Anti-Duplicate Triggered', `Duplicate message from ${message.author.tag} deleted.`, 'GRAY');
  }
  duplicateCache.set(userId, { content: message.content, timestamp: Date.now() });
};
