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
      const extraNumbers = [];
      for (let i = 0; i < 5; i++) {
        extraNumbers.push(Math.floor(Math.random() * 100));
      }
  
      const extraNumbersString = extraNumbers.join(', ');
  
      this.send(`/w ${username} ${randid} [${extraNumbersString}]`);
      
      const discordChannelId = '863729031609843742';
      const discordChannel = this.discordClient.channels.cache.get(discordChannelId);
  
      if (discordChannel) {
        discordChannel.send(`Minecraft user ${username} received the random ID: "${randid}"`);
      } else {
        console.error('Discord channel not found.');
      }
    } catch (error) {
      this.send(`/w ${username} Sorry, but there was an error. Please try again later!`);
      console.error('Error:', error);
    }
  }
}
module.exports = Yedel;