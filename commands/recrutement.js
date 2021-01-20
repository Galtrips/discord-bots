const Discord = require('discord.js')

module.exports = {
   run: message => {
      message.delete()
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor('FakTuR', 'https://cdn.discordapp.com/attachments/801127661803143201/801144118062612490/a_04135f83035cc4f85062e28f2e7949fb_1.gif')
            .setTimestamp()
            .setTitle(`__**Recrutements**__`)
            .setColor('9F0909')
            .setDescription(`
            
            La FakTuR repart de plus belle sur Paladium pour cette V7 ! 
            N'hésitez pas à rejoindre la faction en faisant votre candidature.            
            
            『🖋️』__Informations :__
            
             Faction en reconstruction et déterminée !
            
             Expérimentée en Farming .
            
             À la recherche de membres actifs et matures en jeu tout comme en vocal.
            
             Une Faction Organisée et Structurée.


            『📋』__Exigences :__
            
             Avoir 14 ans Minimum.
            
             Un microphone qui fonctionne (état correct).
            
             Être actif et mature, ainsi qu'avoir de l'expérience en tant que joueur de faction est préférable.


            『🗞️』__Nous Rejoindre :__
            
            Pour rejoindre la Faktur, vous devrez donc respecter les 3 critères ci-dessus. Ainsi, nous nous ferons par la suite une joie de vous accueillir sur notre discord et de lire vos candidatures qui devront être postées directement dans notre gdoc. Par la suite, nous allons vous donner l'accès à un channel, seulement si votre candidature a été retenue ! Si cela n'était pas le cas, nous viendrons vous en informer directement en mp.
            
            __Important :__ Toutes les personnes dont la candidature  sera acceptée se verront dans l'obligation de passer un entretien oral à terme duquel vous serez défini apte ou non à être accueilli au sein de notre Faction. Bonne chance à tous !
            
            Recrutements : ON
            
            [Clique ici pour le Formulaire](https://docs.google.com/forms/d/e/1FAIpQLSejDQcDf7vD7wvcDA4D0FywZaC-QCKZCrWU3td17x7Z1So0lw/viewform)
            
            **On vous attend nombreux !**
            `)
            .setFooter(`Cordialement`)
            .setThumbnail('https://cdn.discordapp.com/attachments/801127661803143201/801145389709131867/th.png')
            
        )
   },
   name: 'recrutement'
}