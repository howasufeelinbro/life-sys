const {MessageEmbed} = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'bank',
    description: 'Shows your bank vault and how much money there is.',
    category: 'info',
    run: async(bot,message,args)=>{
        let user = message.mentions.users.first()
        if (user) return message.channel.send('You are not allowed to peep into other peoples banks!')

        let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)

        if (bank === null) bank = 0

        let bankname = await db.fetch(`namebank_${message.author.id}`)

        if (bankname === null)bankname = 'Default'

        const Embed = new MessageEmbed()
        .setTitle(`${bankname} Bank`)
        .setDescription(`People should not see this.`)
        .addField(`Stored Cash`, `**$${bank}**`)
        message.author.send(Embed)
        message.channel.send('I sent you a DM with the info.')
    }
}