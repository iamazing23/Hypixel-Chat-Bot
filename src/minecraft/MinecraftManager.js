const CommunicationBridge = require('../contracts/CommunicationBridge')
const CommandHandler = require('./CommandHandler')
const StateHandler = require('./handlers/StateHandler')
const ErrorHandler = require('./handlers/ErrorHandler')
const ChatHandler = require('./handlers/ChatHandler')
const YedelCommand = require('./commands/Yedel');
const mineflayer = require('mineflayer')

class MinecraftManager extends CommunicationBridge {
  constructor(app) {
    super()

    this.app = app

    this.stateHandler = new StateHandler(this)
    this.errorHandler = new ErrorHandler(this)
    this.chatHandler = new ChatHandler(this, new CommandHandler(this))
  }
  handleYedelCommand(senderUsername, message) {
    try {

      const yedelCommand = new YedelCommand(this);
  

      yedelCommand.onCommand(senderUsername, message);
    } catch (error) {
      this.send(`/w ${senderUsername} Sorry, but there was an error. Please try again later!`);
      console.error('Error:', error);
    }
  }

  connect() {
    this.bot = this.createBotConnection()
    this.errorHandler.registerEvents(this.bot)
    this.stateHandler.registerEvents(this.bot)
    this.chatHandler.registerEvents(this.bot)
  }

  createBotConnection() {
    const bot = mineflayer.createBot({
      host: this.app.config.server.host,
      port: this.app.config.server.port,
      username: this.app.config.minecraft.username,
      password: this.app.config.minecraft.password,
      version: false,
      auth: this.app.config.minecraft.accountType,
    });


    return bot
  }

  onBroadcast({ username, message, replyingTo }) {
    this.app.log.broadcast(`${username}: ${message}`, 'Minecraft')
  
    if (this.bot.player !== undefined) {
      if (message.startsWith("From ")) {

        const parts = message.split(" ");
        const fromUsername = parts[1];
        const actualMessage = parts.slice(2).join(" ");
        this.bot.chat(`/gc ${replyingTo ? `${fromUsername} replying to ${replyingTo}:` : `${fromUsername}:`} ${actualMessage}`);
      } else {

        this.bot.chat(`/gc ${replyingTo ? `${username} replying to ${replyingTo}:` : `${username}:`} ${message}`);
      }
    }
  }
}

module.exports = MinecraftManager
