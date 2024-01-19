const fs = require('fs')
const { Collection } = require('discord.js-light')

class CommandHandler {
  constructor(discord) {
    this.discord = discord

    this.prefix = discord.app.config.discord.prefix

    this.commands = new Collection()
    let commandFiles = fs.readdirSync('./src/discord/commands').filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
      const command = new (require(`./commands/${file}`))(discord)
      this.commands.set(command.name, command)
    }
  }

  handle(message) {
    if (!message.content.startsWith(this.prefix)) {
      return false;
    }

    const args = message.content.slice(this.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = this.commands.get(commandName) || this.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) {
      return false;
    }

    if (['online', 'help', 'list', 'gtop', 'gm'].includes(command.name)) {
      command.onCommand(message);
      return true;
    }

    const isCommander = this.isCommander(message.member);
    const isOwner = this.isOwner(message.author);

    if ((command.name !== 'help' && !isCommander) || (command.name === 'override' && !isOwner)) {
      return message.channel.send({
        embed: {
          description: `You don't have permission to do that.`,
          color: 'FF6347', // Change the color to a more appropriate one for a warning or lack of permission
        },
      });
    }

    this.discord.app.log.discord(`[${command.name}] ${message.content}`);
    command.onCommand(message);

    return true;
  }

  isCommander(member) {
    return member.roles.cache.find(r => r.id == this.discord.app.config.discord.commandRole)
  }

  isOwner(member) {
    return member.id == this.discord.app.config.discord.ownerId
  }
}

module.exports = CommandHandler