const { EmbedBuilder } = require('discord.js');
module.exports = (title, description, color) => {
  return new EmbedBuilder()
    .setTitle(title)
    .setDescription(description)
    .setColor(color)
    .setTimestamp();
};
