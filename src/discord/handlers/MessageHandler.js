class MessageHandler {
  constructor(discord, command) {
    this.discord = discord
    this.command = command
  }

  async onMessage(message) {

    if (!message.author.bot && message.channel.id === '863729031609843742') {
      if (!this.shouldBroadcastMessage(message)) {

        message.react('❌');
        return;
      }
  
      if (this.command.handle(message)) {
        return;
      }
  
      const content = this.stripDiscordContent(message.content).trim();
      if (content.length == 0) {

        message.react('❌');
        return;
      }
  
      if (this.isBlacklistedWord(message.content)) {
        this.discord.client.channels.fetch(this.discord.app.config.discord.channel).then(channel => {
          channel.send({
            embed: {
              author: { name: `Do not send that profanity!` },
              color: 'FF0000',
            },
          });
        });

        message.react('❌');
        return;
      }
  

      message.react('✅');
  
      this.discord.broadcastMessage({
        username: message.member.displayName,
        message: this.stripDiscordContent(message.content),
        replyingTo: await this.fetchReply(message),
      });
    }
  }

  isBlacklistedWord(message) {
    const blacklistedWords = this.discord.app.config.discord.blacklistedWords;
    for (var i = 0; i < blacklistedWords.length; i++) { 
      if (message.includes(blacklistedWords[i])) {
        return true
      };
    };
  }

  async fetchReply(message) {
    try {
      if (!message.reference) return null

      const reference = await message.channel.messages.fetch(message.reference.messageID)

      return reference.member ? reference.member.displayName : reference.author.username
    } catch (e) {
      return null
    }
  }

  stripDiscordContent(message) {
    return message
      .replace(/<[@|#|!|&]{1,2}(\d+){16,}>/g, '\n')
      .replace(/<:\w+:(\d+){16,}>/g, '\n')
      .replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '\n')
      .split('\n')
      .map(part => {
        part = part.trim()

        return part.length == 0 ? '' : part + ' '
      })
      .join('')
  }

  shouldBroadcastMessage(message) {
    return !message.author.bot && message.channel.id == this.discord.app.config.discord.channel && message.content && message.content.length > 0
  }
}

module.exports = MessageHandler