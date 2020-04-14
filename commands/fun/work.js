const {MessageEmbed} = require('discord.js');
const db = require('quick.db');

module.exports={
    name: 'work',
    description: 'Lets you work for cash in your profession.',
    category: 'fun',
    run: async(bot,message,args)=>{
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let job = db.fetch(`jobs_${message.author.id}`)
        let premium = db.fetch(`premium_${message.author.id}`)

        if (job === null) return message.channel.send(`You do not have a job. Do **<prefix>joblist** for a list of professions and **<prefix>setjob <job>** to be hired!`)
        let paycheck = Math.floor(Math.random() * 150) + 1; //ijc0499w

        const Embed = new MessageEmbed()
        .setTitle('Paycheck')
        .setDescription(`You worked as a(n) **${job}** and we have decided to pay you **$${paycheck}**`)
        .setColor('RANDOM')
        
        message.channel.send(Embed)
        await db.add(`money_${message.guild.id}_${message.author.id}`, paycheck)

        if (premium) {
            let premiumpaycheck = Math.floor(Math.random() * 750) + 1;

            const Embed = new MessageEmbed()
            .setTitle('Premium Bonus')
            .setDescription(`Thank you for supporting our bot! Your premium bonus is **$${premiumpaycheck}**`)
            .setColor('RANDOM')
            
            message.channel.send(Embed)
            await db.add(`money_${message.guild.id}_${message.author.id}`, premiumpaycheck)

            return;
        }
    }
}