      

const Discord = require('discord.js');

module.exports = {
    name: "suggest",
  category: "main",
  usage: "<message>",
    description: "suggest anything you wanted to",
    run: async (bot, message, args) => {
    message.delete()
    // reasoning definition
    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`Coloque a sugestão!`)
        .then(m => m.delete({ timeout: 10000 }));

    // grab reports channel
    let sChannel = message.guild.channels.cache.find(x => x.name === "📩・sugestões");
      if(!sChannel) return message.channel.send("O servidor não tem um canal com o nome `📩│sugestões` contacte um adiministrador para criar o canal")
    // send to reports channel and add tick or cross
    message.channel.send("Sua sugestão foi preenchida para os Ademiros, Obrigado!")
      .then(m => m.delete({ timeout: 10000 }));

    const embed = new Discord.MessageEmbed()
.setAuthor(`( <:reicone_i_21:799092488509063188> ) Sistema de Sugestão **|** Yuno 者`)
      .setFooter(bot.user.username,
      bot.user.displayAvatarURL)
      .setThumbnail("https://cdn.discordapp.com/attachments/609775012039098369/721568772489609238/emoji_74.gif")
      .setTimestamp()
      .setDescription('**Nova Sugestão**💡')
      .addField(`Enviada por💡:`, `**${message.author.tag}** `,)
      .addField(`**Sugestão**:`, `${suggestion}\n`)
      
      
      .setFooter(`•Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));

     sChannel.send(embed).then(async msg => {
     
      await msg.react("✅");
      await msg.react("❌");
    });
  }
};