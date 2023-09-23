const DiscordCommand = require('../../contracts/DiscordCommand')

class meowCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'meow'
    this.aliases = ['meo', 'mao']
    this.description = 'meow'
  }

  onCommand(message) {
    message.channel.send({
      embed: {
        title: 'Meo',
        description: ['Mao'].join('\n'),
        fields: [
          {
            name: 'Meo',
            value: discordCommands.join('\n')
          },
          {
            name: 'mao',
            value: minecraftCommands.join('\n')
          },
          {
            name: `la`,
            value: [
              `la`,
              `la`,
              `la`,
              `la`,
              `la`,
            ].join('\n'),
          }
        ],
        color: message.guild.me.displayHexColor,
        footer: {
          text: 'meow'
        },
        timestamp: new Date()
      }
    }).then(helpMessage => {
      helpMessage.delete({ timeout: 30000 })
    })
  }
}

module.exports = meowCommand