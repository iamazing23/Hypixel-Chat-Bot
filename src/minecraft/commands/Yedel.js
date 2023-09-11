const MinecraftCommand = require('../../contracts/MinecraftCommand');

class Yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'yedel';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      { text: 'SUPER ULTRA RARE RARE RARE!!!!!! YEDEL SAYS UR USING HACKS!!', probability: 1 },
      { text: 'PRAY TO RNGESUS!!!! Yedel said {username} has to pay him 100 coins now haha!!!!', probability: 2 },
      { text: 'ULTRA RARE!!! {username} owes yedel 1 coin!!!', probability: 5 },
      { text: 'Rare! Yedel said {username} sucks!', probability: 10 },
      { text: 'Uncommon! Hey {username}, Yedel thinks you suck!', probability: 15 },
      {text: 'Common! Yedel is not a fan of {username}.', probability: 67 },
    ];
  }

  onCommand(username, message) {
    let formattedResponse;


    if (message === 'You cannot say the same message twice!') {

      formattedResponse = `/gc ${message}`;
    } else {

      const randomNumber = Math.floor(Math.random() * 100) + 1;


      const responseIndex = randomNumber % this.responses.length;
      const response = this.responses[responseIndex].replace('{username}', username);

      formattedResponse = `/gc ${response}`;
    }


    this.send(formattedResponse);
  }
}

module.exports = Yedel;