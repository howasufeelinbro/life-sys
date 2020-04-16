const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports={
    name: 'deposit',
    description: 'Deposits money to your bank.',
    category: 'fun',
    run: async(bot,message,args)=>{
        let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
        let balance = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if (!args[0]) return message.channel.send(`No money was turned in to be deposited.`)

        if (args[0] > balance) return message.channel.send('"You cannot put in more money than you have!" said your bank manager.')

        if (args[0] < 0) return message.channel.send('"You cannot send negative amounts into your bank."')
        
        if (balance === 0) return message.channel.send('There is no money in your pocket right now.')

        const Embed = new MessageEmbed()
        .setDescription(`You deposited **$${args[0]}** into your bank account.`)
        .setColor('GREEN')
        
        message.channel.send(Embed)
        db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0])
        db.add(`bank_${message.guild.id}_${message.author.id}`, args[0])
    }
}