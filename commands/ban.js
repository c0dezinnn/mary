const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot xD",
  usage: "ban <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Você não tem permissão para Bani, Então para de tentar banir né ;-; .`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Eu não tenho permissão Para efetuar o **BAN**`)
    }
    
    let target = message.mentions.members.first();
    
    if(!args[0]) {
      return message.channel.send(`**${message.author.username}**,Por favor mencione o Usuario para aplicar o BAN.`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, Você não pode se banir`)
    }
    
let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";
    
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  // Armazena em uma variável o membro por Menção OU pelo seu Id OU se nada foi fornecido, o user é o próprio Autor

  let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });
  // Armazena o link do avatar do usuário em outra variável. A propriedade Dynamic converte automatimente a extensão da imagem para um gif se ela for animada.

    const embed = new MessageEmbed()
      .setTitle("BANIDO")
      .setColor("RANDOM")
      .setThumbnail(avatar)
      .setDescription(
        `Ação: Ban \nMotivo: ${reason} \nUsuario: ${target } \nModerador: ${message.member}`
      )
      .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
      .setTimestamp();
    
    message.channel.send(embed)
    
    target.ban(args[0]);
    
    
    
  }
}