const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
let sicon = message.guild.iconURL()

const embed = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
.setDescription(`:frame_photo: | **Icone do servidor, [Clique aqui](${sicon}) para baixar.**`)
.setColor("RANDOM")

.setImage(sicon)
.setFooter(`${message.author.username}`,message.author.avatarURL())
.setTimestamp()
message.channel.send(embed)
}