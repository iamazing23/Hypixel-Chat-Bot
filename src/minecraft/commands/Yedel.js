const MinecraftCommand = require('../../contracts/MinecraftCommand');

class yedel extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft);

    this.name = 'yedel';
    this.aliases = [];
    this.description = 'very cool command';
    this.responses = [
      'SUPER ULTRA RARE RARE RARE!!!!!! YEDEL SAYS UR USING HACKS {username}',
      'PRAY TO RNGESUS!!!! Yedel said {username} has to pay him 100 coins now haha!!!!',
      'PRAY TO RNGESUS!!!! Yedel said {username} has to pay him 100 coins now haha!!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'ULTRA RARE!!! {username} owes yedel 1 coin!!!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Rare! Yedel said {username} sucks!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Uncommon! Hey {username}, Yedel thinks you suck!',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
      'Common! Yedel is not a fan of {username}.',
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