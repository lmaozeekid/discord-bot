const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log('Bot is online');
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login('MTMzMjM3ODQ0MjUwNjgyOTkwNA.GeH_qc.-VIzEbAndcJAFa3QY1PnsItirlSskS5FwmXC3g');
