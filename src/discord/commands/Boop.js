const DiscordCommand = require('../../contracts/DiscordCommand')

class HelpCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'boop'
    this.aliases = ['b', 'boop']
    this.description = 'tries to /boop the player'
  }
}

module.exports = Boop