var {Collection, Client, Discord} = require('discord.js');
var fs = require('fs');
var bot = new Client({
  disableEveryone: true
});
var config = require('./config.json');
const token = config.token;
bot.commands = new Collection()
bot.aliases = new Collection()
bot.categories = fs.readdirSync('./commands/')
bot.prefix = config.prefix;
["command","event"].forEach(handler=>{
  require(`./handlers/${handler}`)(bot);
});

bot.login(token)