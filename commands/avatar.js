const Discord = require("discord.js");

exports.run = async (client, message, args) => { 

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
 

  let embed = new Discord.MessageEmbed() 
.setAuthor(`${user.username}`, avatar)

    .setColor(`#4cd8b2`) 

    .setDescription(`📸 | Essa foi a ultima foto que tirei do **${user.username}**, clique [aqui](${avatar}) para baixar.`) 

    .setImage(avatar)

    .setFooter(`• Autor: ${message.author.tag}`, 
    message.author.displayAvatarURL({format: "png"})); 
    


 await message.channel.send(embed); 

}; 