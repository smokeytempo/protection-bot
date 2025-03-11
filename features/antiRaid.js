const { Collection } = require('discord.js');
const logger = require('../utils/logger');
const joinCache = new Collection();
module.exports = (member, client) => {
  const config = client.config.antiRaid;
  const now = Date.now();
  const cache = joinCache.get(member.guild.id) || [];
  const updatedCache = cache.filter(timestamp => now - timestamp < config.timeFrame * 1000);
  updatedCache.push(now);
  joinCache.set(member.guild.id, updatedCache);
  if (updatedCache.length >= config.joinThreshold) {
    if (member.kickable) member.kick('Raid detected');
    logger(client, member.guild, 'Anti-Raid Triggered', `User ${member.user.tag} kicked for raid detection.`, 'RED');
  }
};
