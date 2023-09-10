const MinecraftCommand = require('../../contracts/MinecraftCommand');

class DiceRollCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'dice';
    this.aliases = ['diceroll'];
    this.description = 'Rolls a dice';
  }

  onCommand(username) {
    if (this.minecraft && this.minecraft.chat) {
      const diceRoll = 1 + Math.floor(Math.random() * 6);
      this.minecraft.chat(`/gc ${username} rolled a ${diceRoll}.`);
    } else {
      console.error('Minecraft bot is not correctly initialized or lacks the chat function.');
    }
  }
}

module.exports = DiceRollCommand;