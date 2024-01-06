const DiscordCommand = require('../../contracts/DiscordCommand')

class GuildTopCommand extends DiscordCommand {
    constructor(discord) {
      super(discord)
  
      this.name = 'gm'
      this.aliases = ['member']
      this.description = 'Shows the guild members stats'
    }
  
    onCommand(message) {
      let args = this.getArgs(message)
      let user = args.shift()
      let reason = args.join(' ')
      if (user) {
          this.sendMinecraftMessage(`/g member ${user}`);
        } else {
          this.sendMinecraftMessage(`/w iamazing2 Bot errored`);
        }
      }
    }
module.exports = GuildTopCommand