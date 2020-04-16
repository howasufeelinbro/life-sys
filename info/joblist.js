const {MessageEmbed} = require('discord.js')
module.exports={
    name: 'joblist',
    description: 'Shows a list of availible jobs to work with.',
    category: 'info',
    run: async(bot,message,args)=>{
        let jobs = [
            'Cashier',
            'Operator',
            'Janitor',
            'Surgeon',
            'Teacher',
            'Marketer',
            'Programmer',
            'Developer'
        ]

        message.channel.send(jobs)
        message.channel.send('Do `<prefix>setjob <job>` to work in one of these professions!')
    }
}