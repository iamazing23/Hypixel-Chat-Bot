const MinecraftCommand = require('../../contracts/MinecraftCommand')

class DiceRollCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'dice'
    this.aliases = ['diceroll']
    this.description = 'Rolls a dice'
  }

  onCommand(message) {
    const diceRoll = 1 + Math.floor(Math.random() * 6);
    const playerName = message.author.username;
    message.reply(`/gc ${playerName} rolled a ${diceRoll}.`);
  }
}

module.exports = DiceRollCommand