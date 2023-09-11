const MinecraftCommand = require('../../contracts/MinecraftCommand');

class PingCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'ping';
    this.aliases = [];
    this.description = 'Replies with a random response to the user';
    this.responses = [
      'Pong!',
      'Pong! Did you miss me?',
      'Ping! Oh wait, that\'s my line...',
      'Pong! Playing some Minecraft?',
    ];
  }

  onCommand(username, message) {
    const randomIndex = Math.floor(Math.random() * this.responses.length);
    const randomResponse = this.responses[randomIndex];
    this.send(`/w ${username} ${randomResponse}`);
  }
}

module.exports = PingCommand;