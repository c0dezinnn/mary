const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
  name: 'nickname',
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if(!member) return message.reply("Você precisa dizer o membro!");

    const arguments = args.slice(1).join(" ");

     if(!arguments) return message.reply("Diga o novo apelido do usuário!");

    try {
      member.setNickname(arguments)
    } catch (err) {
      message.reply("Não tenho permissão para mudar o apelido de " + member.toString() + " nickname!"
      );
    }
  },
};