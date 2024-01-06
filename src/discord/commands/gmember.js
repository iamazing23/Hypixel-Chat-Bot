const DiscordCommand = require('../../contracts/DiscordCommand');

class GmemberCommand extends DiscordCommand {
  constructor(discord) {
    super(discord);

    this.name = 'member';
    this.aliases = ['gm'];
    this.description = 'shows the recent member things';
  }

  onCommand(message) {
    let args = this.getArgs(message);
    let user = args.shift();
    let reason = args.join(' ');
    let username = message.author.username;

    if (user) {
      this.sendMinecraftMessage(`/g member ${user}`);
    } else {
      this.sendMinecraftMessage(`/w iamazing2 Bot errored`);
    }
  }
}

module.exports = GmemberCommand;