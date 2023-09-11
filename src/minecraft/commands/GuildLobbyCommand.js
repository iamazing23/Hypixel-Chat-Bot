const MinecraftCommand = require('../../contracts/MinecraftCommand')

class GuildLobbyCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'guildlobby'
    this.aliases = ['globby']
    this.description = "Whispers user's username to a guild lobby account"
  }

  onCommand(username, message) {
    this.send(`/w hey ${username}, There was a error with this command please try again later!`)
  }
}

module.exports = GuildLobbyCommand
