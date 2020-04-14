const {MessageEmbed} = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setjob',
    description: 'Lets you choose your profession.',
    category: 'fun',
    run: async(bot,message,args)=>{
        let job = db.fetch(`jobs_${message.author.id}`)

        let jobs = [
            'Cashier',
            'Operator',
            'Janitor',
            'Surgeon',
            'Teacher',
            'Marketer',
            'Programmer',
            'Developer',
            'Pornstar'
        ]
        if(!args[0]) return message.channel.send('You must select a job!')
        if (!args[0] === jobs) return message.channel.send('This is not a valid job! Use **<prefix>joblist** for a list of jobs.')
        if (message.author.id === '624324807189594123') db.set(`jobs_${message.author.id}`, 'G O D')

        await db.set(`jobs_${message.author.id}`, args[0])
        const Embed = new MessageEmbed()
        .setTitle(`You have been hired!`)
        .setDescription(`You have been hired as a(n) **${args[0]}**\nUse **<prefix>work** to start your grind!`)
        .setColor(`GREEN`)

        message.channel.send(Embed)
    }
}