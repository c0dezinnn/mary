const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const EmbedColor = "RANDOM";
const ErrorMessage = `Erro ao obter informações | Por favor, tente novamente mais tarde!`;

const Prefix = ">!";

module.exports = {
  name: "channelinfo",
  description: "Give Your Channel Information!",
  aliases: [""],
  usage: "Channelinfo <Mention Channel>",
  example: "Channelinfo",
  run: async (client, message, args) => {
    try {

    let nsfw = message.channel.nsfw ? 'Sim' : 'Não';
    let parent = message.channel.parent ? message.channel.parent : 'Não tem categoria';
    let topic = message.channel.topic ? message.channel.topic : 'Não tem';
    let embed = new MessageEmbed()
		.setColor("RANDOM")
        .setTitle('Nome do canal : ' + message.channel.name)
        .setDescription('**Topico do canal** : ' + topic)
        .addField('Tipo NSFW do canal ', nsfw, true)
        .addField("Categoria do canal ", parent, true)
        .addField('Posição do canal ', message.channel.position, true)
        .addField("Canal criado em", `${message.channel.createdAt.toDateString()}`, true)
        .setFooter(`${message.author.username}`)

    message.channel.send(embed);

      await message.delete();
    } catch (error) {
      console.log(error);
      message.channel.send(
        new MessageEmbed()
          .setColor(`#ff0000`)
          .setDescription(`${ErrorMessage}`)
          .setFooter(`Desculpe pelo erro!`)
          .setTimestamp()
      );
    }
  }
};