const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'premium',
    description: 'Shows your premium status.',
    category: 'premium',
    run: async(bot,message,args)=>{
        let premium = await db.fetch(`premium_${message.author.id}`)

        var Embed = new MessageEmbed()
            .setTitle('Premium Bronze')
            .setDescription('This is a **premium** command!\n\nYou can buy Premium Bronze with $100,000,000 by doing <prefix>premiumbuy.\n\nPremium bronze gives money benefits and access to premium category commands!')
            .setImage('https://i.imgur.com/l3fmtWF.png')
            .setColor('YELLOW')
            .setTimestamp()

        if(premium === 'None') {
            return message.channel.send(Embed)
        }

        var Embed2 = new MessageEmbed()
        .setTitle('Your premium status.')
        .addField(`Premium Rank:`, premium)
        .setColor('RANDOM')
        .setTimestamp()

        message.channel.send(Embed2)

    }
}