const Discord = require('discord.js')

exports.run = async (client, message) => {
  message.delete()

  
 
 let help = new Discord.MessageEmbed()
     .setColor('#4169E1')
     .setTitle(` | __Menu de ajuda__`)
     .setDescription(`Olรก ${message.author.username}! **:) esses sรฃo meus comandos!**`)
     .setThumbnail('')
     .addField(`https://is.gd/marycommands.`)
     
     .addField(`Meu criador ๐0๐๐#0001.`)

 await message.channel.send(help)
  
}