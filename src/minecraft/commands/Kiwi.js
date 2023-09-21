const MinecraftCommand = require('../../contracts/MinecraftCommand');

class KiwiCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'kiwi';
    this.aliases = [];
    this.description = 'kiwis command';
    this.responses = [
      'Average kiwi moment ^^',
      'Average kiwi moment ^^^^',
      'Average kiwi moment ^',
      'Average kiwi moment ^^^^^',
    ];
  }

  onCommand(username, message) {
    const randomIndex = Math.floor(Math.random() * this.responses.length);
    const randomResponse = this.responses[randomIndex];
    this.send(`/gc ${randomResponse}`);
  }
}

module.exports = KiwiCommand;