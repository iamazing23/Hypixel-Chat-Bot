const MinecraftCommand = require('../../contracts/MinecraftCommand');

class yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'yedel';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      'Yedel said {username} sucks',
      'Hey {username}, Yedel thinks you suck!',
      'Yedel is not a fan of {username}',
    ];
  }

  onCommand(username, message) {
    // Randomly select a response from the list
    const randomIndex = Math.floor(Math.random() * this.responses.length);
    const response = this.responses[randomIndex].replace('{username}', username);

    this.send(`/gc ${response}`);
  }
}

module.exports = yedel;