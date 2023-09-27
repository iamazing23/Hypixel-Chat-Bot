const Discord = require('discord.js');

class MessageHandler {
  constructor(discord, command) {
    this.discord = discord;
    this.command = command;
  }

  async onMessage(message) {
    if (!this.shouldBroadcastMessage(message)) {
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
        message.react('❌');
      });
      return;
    }

    const links = this.extractLinks(message.content);
    if (links.length > 0) {
      const linkText = links.join('\n');
      this.discord.client.channels.fetch(this.discord.app.config.discord.channel).then(channel => {
        channel.send({
          content: `Here are the links:\n${linkText}`,
        });
      });
    }

    this.discord.broadcastMessage({
      username: message.member.displayName,
      message: this.stripDiscordContent(message.content),
      replyingTo: await this.fetchReply(message),
    });
    
    message.react('✅');
  }

  isBlacklistedWord(message) {
    const blacklistedWords = this.discord.app.config.discord.blacklistedWords;
    for (var i = 0; i < blacklistedWords.length; i++) { 
      if (message.includes(blacklistedWords[i])) {
        return true;
      }
    }
    return false;
  }

  async fetchReply(message) {
    try {
      if (!message.reference) return null;

      const reference = await message.channel.messages.fetch(message.reference.messageID);

      return reference.member ? reference.member.displayName : reference.author.username;
    } catch (e) {
      return null;
    }
  }

  stripDiscordContent(message) {
    return message
      .replace(/<[@|#|!|&]{1,2}(\d+){16,}>/g, '\n')
      .replace(/<:\w+:(\d+){16,}>/g, '\n')
      .replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, '\n')
      .split('\n')
      .map(part => {
        part = part.trim();

        return part.length == 0 ? '' : part + ' ';
      })
      .join('');
  }

  shouldBroadcastMessage(message) {
    return !message.author.bot && message.channel.id == this.discord.app.config.discord.channel && message.content && message.content.length > 0;
  }

  extractLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
  }
}

module.exports = MessageHandler;