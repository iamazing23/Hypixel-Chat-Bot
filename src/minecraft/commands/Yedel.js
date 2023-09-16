const MinecraftCommand = require('../../contracts/MinecraftCommand');

class Yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'yedel';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      { text: 'SUPER ULTRA RARE RARE RARE!!!!!! YEDEL SAYS UR USING HACKS!!', probability: 3 },
      { text: 'ULTRA RARE!!! {username} owes yedel 1 coin!!!', probability: 5 },
      { text: 'Rare! Yedel said {username} sucks!', probability: 10 },
      { text: 'Uncommon! Hey {username}, Yedel thinks you suck!', probability: 15 },
      { text: 'Common! Yedel is not a fan of {username}.', probability: 67 },
    ];
  }

  selectRandomResponse() {
    const totalProbability = this.responses.reduce((sum, response) => sum + response.probability, 0);
    const randomNumber = Math.floor(Math.random() * totalProbability) + 1;
    let selectedResponse;
    let cumulativeProbability = 0;

    for (const response of this.responses) {
      cumulativeProbability += response.probability;

      if (randomNumber <= cumulativeProbability) {
        selectedResponse = response.text;
        break;
      }
    }

    return selectedResponse;
  }

  onCommand(username, message) {
    try {
      const randid = `@${(Math.random() + 1).toString(36).substring(6)}`;
  
      this.send(`/w ${username} ${selectResponse} ${randid}`);
      
      const discordChannelId = '863729031609843742';
      const discordChannel = this.discordClient.channels.cache.get(discordChannelId);
    } catch (error) {
      this.send(`/w ${username} Sorry, but there was an error. Please try again later!${randid}`);
      console.error('Error:', error);
    }
  }
}

module.exports = Yedel;