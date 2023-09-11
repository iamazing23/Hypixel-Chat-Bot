const Discord = require('discord.js');
const { Command } = require('discord.js-commando');

class BoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'boop',
      aliases: ['b'],
      description: 'Boop a user by mentioning them.',
      args: [
        {
          key: 'user',
          prompt: 'Which user would you like to boop?',
          type: 'user',
        },
      ],
    });
  }

  run(message, { user }) {
    message.channel.send(`Boop! ${user}`);
  }
}

module.exports = BoopCommand;