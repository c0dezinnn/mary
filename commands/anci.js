const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "ascii",
  aliases: null,
  category: "fun",
  description: "Ascii Art!",
  usage: "Ascii <Text>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Por favor, dê-me um texto!`);

    if (args.length === 1) return message.channel.send(`Só quer uma palavra? Coloque mais...`);

    if (Content.length > 20)
      return message.channel.send(`Por favor, faça mais curto! | Limite: 20`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription("```" + Result + "```")
      .setFooter(`A palavra "${Content}"`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};