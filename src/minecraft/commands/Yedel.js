const MinecraftCommand = require('../../contracts/MinecraftCommand')

class yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'yedel'
    this.aliases = []
    this.description = 'very cool command'
  }

  onCommand(username, message) {
    this.send(`/gc yedel said ${username} sucks`)
  }
}

module.exports = yedel
