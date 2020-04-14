const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API latency.',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('Fetching...')
        const Embed = new MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`***Latency:***\n${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\n\n***API Latency:***\n${Math.round(bot.ws.ping)}ms.`)
        .setColor('RANDOM')
        .setFooter('x3k90odke903 <- [run code]')
        msg.edit(Embed)
    }
}