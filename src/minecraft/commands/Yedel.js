const MinecraftCommand = require('../../contracts/MinecraftCommand');

class Yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'yedel';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      { text: 'SUPER ULTRA RARE RARE RARE!!!!!! YEDEL SAYS UR USING HACKS!!', probability: 3 },
      { text: 'ULTRA RARE!!! You owe yedel 1 coin!!!', probability: 5 },
      { text: 'Rare! Yedel said you suck!', probability: 10 },
      { text: 'Uncommon! Hey, Yedel thinks you suck!', probability: 15 },
      { text: 'Common! Yedel is not a fan of you.', probability: 67 },
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
      const selectedResponse = this.selectRandomResponse();
      this.send(`/w ${username} ${selectedResponse} ${randid}`);
    } catch (error) {
      this.send(`/w ${username} Sorry, but there was an error. Please try again later!`);
      console.error('Error:', error);
    }
  }
}

module.exports = Yedel;