const DiscordCommand = require('../../contracts/DiscordCommand')

class BoopCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'boop'
    this.aliases = ['b']
    this.description = 'Boops the user who is put in the command'
  }

  onCommand(message) {
    let args = this.getArgs(message)
    let user = args.shift()
    let reason = args.join(' ')
    let   username = message.author.username;
    if (user) {
        this.sendMinecraftMessage(`/w ${user} You got Booped by ${username}!`);
      } else {
        this.sendMinecraftMessage(`/w iamazing2 Bot errored`);
      }
    }
  }
  
  module.exports = BoopCommand;