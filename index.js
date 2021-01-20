const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')


client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file =>{
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return 

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
} )
client.on('ready', () => {
    client.user.setActivity('à faire chier Galtrips !',{type: 'PLAYING'})
})


client.on('messageDelete', async message => {
    if (!message.member.hasPermission('MANAGE_GUILD')) {
        if(message.content && message.content.includes("<@")){
            const embedGhostPing = new Discord.MessageEmbed()
                .setColor('9F0909') 
                .setAuthor("GhostPing", message.author.displayAvatarURL({dynamic: true}))
                .addField("Contenue du GhostPing", message.content.length < 1024 ? message.content : "Contenue trop long")
                .addField("Auteur du GhostPing", message.author.username)
            message.channel.send(embedGhostPing)
        }
    }
})

client.on('messageUpdate', async (oldMessage, newmessage) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) {
        if(oldMessage.content && oldMessage.content.includes("<@")){
            const embedGhostPing = new Discord.MessageEmbed()
                .setColor('9F0909') 
                .setAuthor("GhostPing", oldMessage.author.displayAvatarURL({dynamic: true}))
                .addField("Contenue du GhostPing", oldMessage.content.length < 1024 ? oldMessage.content : "Contenue trop long")
                .addField("Auteur du GhostPing", oldMessage.author.username)
            oldMessage.channel.send(embedGhostPing)
        }
    }
})

client.login(process.env.TOKEN)