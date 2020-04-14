const {MessageEmbed} = require('discord.js')

module.exports={
    name: 'hack',
    description: 'Fake hacks a user to scare them if they are new to the bot. HAHAHAHAHAAHAHAHA',
    category: 'fun',
    run: async(bot,message,args)=>{

        let target = message.mentions.users.first()
        let emails = [
            'salvancho.peito_4@gmail.com',
            'nordcolor23kk@yamavo.net',
            'someboi@apple.com',
            'tigresanchez@yomail.org',
            'beetus999969@gmail.com',
            'totallyrealadress@real.com',
            'parentlove82@hotmail.com',
            'tigger@pv.fun',
            'blockcitikid2@indigomail.info',
            'thiscommandisactuallyfake@getrekt.com'
        ]

        let passwords = [
            '2093uedj23jie',
            'mamalovesme2222',
            'd2390d32lllllll_lol',
            'safepasswordtruly123123',
            'imunder13_ishouldnotbehere',
            'k094299k02349kowata',
            'waterbuggy999',
            'obantje23lol23',
            'florisk',
            'carzoom_',
            'minisodashoutout',
            'gameradio10',
            'quavi99',
            'thiscommandisactuallyfake'
        ]

        let ipaddress = [
            '86.219.223.1',
            '15.204.30.240',
            '15.19.164.52',
            '11.185.150.119',
            '162.138.239.60',
            '11.25.219.247',
            '178.151.236.159',
            '86.55.149.210',
            '239.199.96.80',
            '221.2.235.123',
            '200.248.249.101',
            '41.48.157.162',
            '154.138.235.137',
            '224.76.106.172',
        ]

        let emailsent = Math.floor(Math.random() * emails.length);
        let passwordsent = Math.floor(Math.random() * passwords.length)
        let ipsent = Math.floor(Math.random() * ipaddress.length)
        if (!target) return message.channel.send('Aye, I got no one to hack!')

        const Embed = new MessageEmbed()
        .setTitle('Hacker Monitor Thingy')
        .setDescription(`Target: **${target.username}`)
        .addField('Email', emails[emailsent])
        .addField(`Password`, passwords[passwordsent])
        .addField('IP Address', ipaddress[ipsent])
        .setColor('GREEN')
        .setFooter('This is not actually real')

        message.channel.send(Embed)
    }
}