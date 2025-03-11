const { EmbedBuilder } = require('discord.js');
module.exports = (client, guild, title, description, color) => {
  const logChannel = guild.channels.cache.get(process.env.LOG_CHANNEL_ID);
  const embed = new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color)
    .setTimestamp();
  if (logChannel) {
    logChannel.send({ embeds: [embed] }).catch(() => {});
  }
  console.log(`[${new Date().toISOString()}] ${title}: ${description}`);
};
