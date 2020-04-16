const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'report',
    description: 'Allows you to report a user',
    category: 'utility',
    run: async(bot,message,args)=>{
        message.channel.send('Reports are under construction.')
    }
}