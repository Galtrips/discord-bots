const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut-être', 'surment', 'Pas sûr', 'PTDR tu es qui ?', 'MDR, même ma grand mère a plus de charisme', 'Euh ? faut dire la vérité ?', 'pas trop nan', 'Logique', 'Bien-sûr']

module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send("Veuillez indiquer une question")
        message.channel.send(replies[Math.floor(Math.random() * replies.length)])
            

    },
    name: '8ball'

}