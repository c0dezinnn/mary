const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    var random = Math.floor(Math.random() * (5 - 2) + 2);
    if (random === 3){
 
        let embed = new Discord.MessageEmbed()
         .setThumbnail("https://media.discordapp.net/attachments/564616344155193355/567014534116802595/1f52b.png?width=410&height=410")
        .setDescription(`Rodou o cartucho e vc sobreviveu!`)
        .setColor('RANDOM')
        .setFooter(`A bala ficou no cartucho ${Math.round(random)}`)
 
        message.reply(embed)
    }
    else{
        let embed2 = new Discord.MessageEmbed()
 
        .setDescription(`Rodou o cartucho e vc morreu!`)
        .setColor('RANDOM')
         .setThumbnail("https://media.discordapp.net/attachments/564616344155193355/567014534116802595/1f52b.png?width=410&height=410")
        .setFooter(`A bala estava no cartucho ${Math.round(random)}`)
 
        message.reply(embed2)
    }
 
}
 
exports.help = {
    name: 'roleta'
}