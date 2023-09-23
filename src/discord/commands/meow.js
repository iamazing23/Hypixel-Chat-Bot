const DiscordCommand = require('../../contracts/DiscordCommand')

class MeowCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'meow'
    this.aliases = ['meo', 'mao']
    this.description = 'meow'
  }

  onCommand(message) {
    message.channel.send({
      embed: {
        title: 'Meow',
      }
    }).then(helpMessage => {
      helpMessage.delete({ timeout: 30000 })
    })
  }
}
module.exports = MeowCommand