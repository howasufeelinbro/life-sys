const {MessageEmbed} = require('discord.js')
const db = require('quick.db');

module.exports = {
    name: 'premiumcancel',
    description: 'Allows a user to cancel their premium.',
    category: 'fun',
    run: async(bot,message,args)=>{
        let premium = await db.fetch(`premium_${message.author.id}`)

        if (premium === 'None') return message.channel.send(`You do not have any premium membership. You can buy one by doing /premium buy`)

        message.channel.send('You cancelled your premium membership. Thanks for your dedication and support!')
        db.set(`premium_${message.author.id}`, 'None')
    }
}