const Discord = require('discord.js');

module.exports = {
    name: "report",
  category: "main",
  usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (bot, message, args) => {
    message.delete()
    // reasoning definition
    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`insira a denuncia!`)
        .then(m => m.delete({ timeout: 10000 }));

    // grab reports channel
    let sChannel = message.guild.channels.cache.find(x => x.name === "denuncias");
      if(!sChannel) return message.channel.send("Você não tem o canal com o nome `denuncias`")
    // send to reports channel and add tick or cross
    message.channel.send("Sua denuncia foi enviada para a staff em sigilo!")
      .then(m => m.delete({ timeout: 10000 }));

    const embed = new Discord.MessageEmbed()
.setAuthor(`©Santzz`)
      .setFooter(bot.user.username,
      bot.user.displayAvatarURL)
      .setThumbnail("https://cdn.discordapp.com/attachments/609775012039098369/721568772489609238/emoji_74.gif")
      .setTimestamp()
      .setDescription('**Nova denuncia**')
      .addField(`Enviada por:`, `**${message.author.tag}** `,)
      .addField(`**Denuncia**:`, `${suggestion}\n`)
      
      .setColor('#0077ff')
      
      .setFooter(`•Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

     sChannel.send(embed).then(async msg => {
     
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};