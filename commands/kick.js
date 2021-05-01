const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Você Não tem permissão para esse comando.`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Não tenho permissão suficiente para usar este comando!`)
    }
    
    let target = message.mentions.members.first();
    
    if(!args[0]) {
      return message.channel.send(`**${message.author.username}**, Mencione`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, Você não pode se kickar`)
    }
    
let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  // Armazena em uma variável o membro por Menção OU pelo seu Id OU se nada foi fornecido, o user é o próprio Autor

  let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
  // Armazena o link do avatar do usuário em outra variável. A propriedade Dynamic converte automatimente a extensão da imagem para um gif se ela for animada.


    const embed = new MessageEmbed()
      .setTitle("**KICKADO**")
      .setColor("RANDOM")
      .setThumbnail(avatar)
      .setDescription(
        `Ação: Kick \nRazão: ${reason} \nUsuario: ${target } \nModerador: ${message.member}`
      )
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
      .setTimestamp();
    
    message.channel.send(embed)
    
    target.kick(args[0]);
    
    
    
  }
}