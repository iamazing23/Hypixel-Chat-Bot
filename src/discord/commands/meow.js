const DiscordCommand = require('../../contracts/DiscordCommand')

class meowCommand extends DiscordCommand {
  constructor(discord) {
    super(discord)

    this.name = 'meow'
    this.aliases = ['meo', 'mao']
    this.description = 'meow'
  }

  onCommand(message) {
    let discordCommands = []
    let minecraftCommands = []

    this.discord.messageHandler.command.commands.forEach(command => {
      discordCommands.push(`\`${command.name}\`: ${command.description}`)
    })

    this.discord.app.minecraft.chatHandler.command.commands.forEach(command => {
      minecraftCommands.push(`\`${command.name}\`: ${command.description}`)
    })

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