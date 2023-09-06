const { Client, Intents } = require('discord.js-light');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
'use strict'
process.title = 'Hypixel Discord Chat Bridge'

const app = require('./src/Application')
const DiscordManager = require('./DiscordManager'); // Replace with the correct path
const discordManager = new DiscordManager(app, client);

app
  .register()
  .then(() => {
    app.connect()
  })
  .catch(err => {
    console.error(err)
  })
