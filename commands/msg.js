const config = require('../config.json')

module.exports = {
    run: (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission nessessaire pour faire ça')
        const member = message.mentions.members.first()
        const mp = message.content.split(" ").slice(1).join(" ").slice(23)
        if (!member) return message.channel.send('Veuillez mentionner quelqu\'un')
        if (!args[1]) return message.channel.send('Veuillez indiquer le texte que je dois écrire')  
        member.send(mp)
        message.delete()
        
    },
    name: 'msg',
    guildOnly: true
}