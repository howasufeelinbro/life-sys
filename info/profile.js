const {MessageEmbed} = require('discord.js');
const db = require('quick.db');

module.exports={
    name: 'profile',
    description: 'Provides your bot profile.',
    category: 'info',
    run: async(bot,message,args)=>{
        let None = 'Unnamed'

        let user = message.mentions.users.first() || message.author;
        
        let name = db.fetch(`name_${user.id}`)

        if (name === null) name = 'Unnamed.';

        let premium = db.fetch(`premium_${user.id}`)

        if (premium === null) premium = 'None'

        let tag = Math.floor(Math.random() * 999999) + 1; //Generates a random tag from 1 to 999999

        let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

        if (bal === null) bal = 0;

        let job = db.fetch(`jobs_${user.id}`)

        if (job === null) job = 'Unemployed'

        const Embed = new MessageEmbed()
        .setTitle(`${user.tag}'s Profile.`)
        .setDescription(`Is this user a bot? ${user.bot}`)
        .addField('Username', user)
        .addField('Name', `**${name}**`)
        .addField(`Profession`, `**${job}**`)
        .addField(`Premium Rank`, `**${premium}**`)
        .addField(`Balance`, `**$${bal}**`)
        .addField(`Special Tag`, tag)
        .setColor('RANDOM')

        message.channel.send(Embed)
    }
}