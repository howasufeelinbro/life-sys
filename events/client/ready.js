const {prefix} = require('../../config.json')
module.exports=bot=>{
    bot.user.setActivity(`Serving ${bot.guilds.cache.size} planets | ${bot.users.cache.size} beings.`, {type: "STREAMING"}, url='https://twitch.tv/discordapp')
    console.log(`${bot.guilds.cache.size} servers loaded. ${bot.users.cache.size} users loaded. Status loaded.`)
}