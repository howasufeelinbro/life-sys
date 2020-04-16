const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports ={
    name: 'yeet',
    run: async(bot,message,args)=>{
        let user = message.mentions.users.first() || message.author
        let balance = await db.fetch(`money_${message.guild.id}_${user.id}`)
        if (!args[0]) return message.channel.send('You may not use this command')
        if (args[0]) return message.channel.send('You may not use this command')

        db.add(`money_${message.guild.id}_${user.id}`, args[0])
        message.channel.send('yeeted')
    }
}