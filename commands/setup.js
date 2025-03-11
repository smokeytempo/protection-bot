const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs').promises;
const path = require('path');
const configPath = path.join(__dirname, '../config/config.json');
module.exports = {
  name: 'setup',
  data: new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Configure protection settings')
    .addSubcommand(subcommand => 
      subcommand
        .setName('antispam')
        .setDescription('Setup anti-spam settings')
        .addIntegerOption(option => option.setName('threshold').setDescription('Message threshold').setRequired(true))
        .addIntegerOption(option => option.setName('duration').setDescription('Time frame in seconds').setRequired(true))
        .addStringOption(option => option.setName('punishment').setDescription('Punishment (mute/kick/ban)').setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('antiraid')
        .setDescription('Setup anti-raid settings')
        .addIntegerOption(option => option.setName('jointhreshold').setDescription('Join threshold').setRequired(true))
        .addIntegerOption(option => option.setName('timeframe').setDescription('Time frame in seconds').setRequired(true))
        .addStringOption(option => option.setName('punishment').setDescription('Punishment (kick/ban)').setRequired(true))
    ),
  async execute(interaction, client) {
    if (!interaction.member.permissions.has('Administrator')) {
      return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }
    const sub = interaction.options.getSubcommand();
    let configData = JSON.parse(await fs.readFile(configPath, 'utf8'));
    if (sub === 'antispam') {
      const threshold = interaction.options.getInteger('threshold');
      const duration = interaction.options.getInteger('duration');
      const punishment = interaction.options.getString('punishment');
      configData.antiSpam.threshold = threshold;
      configData.antiSpam.duration = duration;
      configData.antiSpam.punishment = punishment;
    } else if (sub === 'antiraid') {
      const joinThreshold = interaction.options.getInteger('jointhreshold');
      const timeFrame = interaction.options.getInteger('timeframe');
      const punishment = interaction.options.getString('punishment');
      configData.antiRaid.joinThreshold = joinThreshold;
      configData.antiRaid.timeFrame = timeFrame;
      configData.antiRaid.punishment = punishment;
    }
    await fs.writeFile(configPath, JSON.stringify(configData, null, 2));
    client.config = configData;
    return interaction.reply({ embeds: [require('../utils/embedBuilder')('Setup Updated', 'Configuration updated successfully', 'GREEN')] });
  }
};
