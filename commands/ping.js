const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  name: 'ping',
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping command'),
  async execute(interaction) {
    return interaction.reply({ embeds: [require('../utils/embedBuilder')('Pong!', `Latency: ${Date.now() - interaction.createdTimestamp}ms`, 'BLUE')] });
  }
};
