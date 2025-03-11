const logger = require('../utils/logger');
const spamCache = new Map();
module.exports = (message, client) => {
  const config = client.config.antiSpam;
  const userId = message.author.id;
  const now = Date.now();
  if (!spamCache.has(userId)) spamCache.set(userId, []);
  const timestamps = spamCache.get(userId).filter(ts => now - ts < config.duration * 1000);
  timestamps.push(now);
  spamCache.set(userId, timestamps);
  if (timestamps.length > config.threshold) {
    if (config.punishment === 'mute') {
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
      if (muteRole) {
        message.member.roles.add(muteRole);
      }
    } else if (config.punishment === 'kick') {
      message.member.kick('Spamming');
    } else if (config.punishment === 'ban') {
      message.member.ban({ reason: 'Spamming' });
    }
    logger(client, message.guild, 'Anti-Spam Triggered', `User ${message.author.tag} punished for spamming.`, 'ORANGE');
    spamCache.set(userId, []);
  }
};
