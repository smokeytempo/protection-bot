const antiSpam = require('../features/antiSpam');
const antiLink = require('../features/antiLink');
const antiProfanity = require('../features/antiProfanity');
const antiAdvertising = require('../features/antiAdvertising');
const antiMentionSpam = require('../features/antiMentionSpam');
const antiPhishing = require('../features/antiPhishing');
const antiDuplicate = require('../features/antiDuplicate');
module.exports = {
  name: 'messageCreate',
  async execute(message, client) {
    if (message.author.bot) return;
    antiSpam(message, client);
    antiLink(message, client);
    antiProfanity(message, client);
    antiAdvertising(message, client);
    antiMentionSpam(message, client);
    antiPhishing(message, client);
    antiDuplicate(message, client);
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    if (!command) return;
    try {
      await command.execute(message, args, client);
    } catch (error) {
      console.error(error);
    }
  }
};
