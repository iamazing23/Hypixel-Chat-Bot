const MinecraftCommand = require('../../contracts/MinecraftCommand')

class Yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'Yedel'
    this.aliases = []
    this.description = 'very cool command'
  }

  onCommand(username, message) {
    this.send(`/w ${username} Sucks`)
  }
}

module.exports = Yedel