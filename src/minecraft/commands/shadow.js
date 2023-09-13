const MinecraftCommand = require('../../contracts/MinecraftCommand');

class Shadow extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'Shadow';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      // ... Your existing response objects ...
    ];
  }

  selectRandomResponse() {
    // ... Your existing code ...
  }

  onChat(username, message) {
    try {

      if (username === '[MVP++] iamazing2' && message) {
        const response = 'https://cdn.discordapp.com/attachments/1149209215659937813/1149209233628340254/IMG_9224.png';
        this.send(response);
      }
    } catch (error) {
      this.send(`/w ${username} Sorry, but there was an error. Please try again later!`);
      console.error('Error:', error);
    }
  }
}

module.exports = shadow;