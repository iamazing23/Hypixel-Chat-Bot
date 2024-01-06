const DiscordCommand = require('../../contracts/DiscordCommand')

class GuildTopCommand extends DiscordCommand {
    constructor(discord) {
      super(discord)
  
      this.name = 'top'
      this.aliases = ['gtop']
      this.description = 'Shows the top guild members of the day'
    }
  
    onCommand(message) {
      this.sendMinecraftMessage(`/g top`)
    }
  }

module.exports = GuildTopCommand