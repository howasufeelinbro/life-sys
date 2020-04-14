const {MessageEmbed} = require('discord.js')
const db = require('quick.db');

module.exports = {
    name: 'premiumbuy',
    description: 'Allows a user to buy their premium.',
    category: 'fun',
    run: async(bot,message,args)=>{

        let premium = await db.fetch(`premium_${message.author.id}`)
        let balance = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if (premium === 'Premium Bronze') return message.channel.send('You already have premium! Upgradable plans will be introduced later.')
        if (balance < 100000000) return message.channel.send('You do not have enough money. `$100,000,000`')

        message.channel.send(`You bought premium! Your purchase is successful, check your profile for your verification!`)
        db.set(`premium_${message.author.id}`, 'Premium Bronze')
        db.subtract(`money_${message.guild.id}_${message.author.id}`, 100000000)
        }
    }