const Discord = require('discord.js')

exports.run = async (client, message) => {
  message.delete()

  
 
 let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(` | __Menu de ajuda__`)
     .setDescription(`Olá ${message.author.username}! **:) esses são meus comandos!**`)
     .setThumbnail('')
     .addField(`https://is.gd/marycommands`)
     
     .addField(`Meu criador 𝒞0𝑑𝑒#0001`)

 await message.channel.send(help)
  
}