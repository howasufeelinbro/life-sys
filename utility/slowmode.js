module.exports={
    name: 'slowmode',
    description: 'Sets a slowmode in the channel.',
    category: 'utility',
    run: async(bot,message,args)=>{
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return ('You do not have permission to set a slowmode')
        if(!args[0]) return message.channel.send('You did not give a time to set the slowmode in this channel!')
        if(isNaN(args[0])) return message.channel.send('That is not a number...')
        let reason = message.content.slice(bot.prefix.length+9+args[0].length+1)
        if(!reason) {
            reason = "No reason."
        }
        message.channel.setRateLimitPerUser(args[0],reason)
        message.channel.send(`A slowmode has been set for this channel.\n**${args[0]}s Slowmode**\n\nReason: **${reason}**`)
    }
}