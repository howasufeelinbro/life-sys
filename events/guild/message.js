const {prefix} = require('../../config.json')
const db = require('quick.db');
module.exports=async(bot,message)=>{

    let prefix;

    let prefixes = db.fetch(`prefix_${message.guild.id}`)

    if (prefixes === null) {
        prefix = '/'
    } else{
        prefix = prefixes;
    }

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    var command = bot.commands.get(cmd)
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if (command) command.run(bot,message,args)
}
