const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if(!['667817180028469288'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")

  let guild =  client.guilds.cache.get("728814862473625691");
 message.delete()

 let load = message.guild.emojis.cache.find(emoji => emoji.name === 'load')


 let logo = message.guild.emojis.cache.find(emoji => emoji.name === 'logo');

 let banner = message.guild.emojis.cache.find(emoji => emoji.name === 'banner');

 let flyer = message.guild.emojis.cache.find(emoji => emoji.name === 'fixed');

 let outros = message.guild.emojis.cache.find(emoji => emoji.name === 'outros');

 let info = message.guild.emojis.cache.find(emoji => emoji.name === 'aviso~1')

 let equip = message.guild.emojis.cache.find(emoji => emoji.name === 'equipe')

 let warn = message.guild.emojis.cache.find(emoji => emoji.name === 'warn')

 let lgif = message.guild.emojis.cache.find(emoji => emoji.name === 'logoSantzz')

  let gif = message.guild.emojis.cache.find(emoji => emoji.name === 'GIFe')


  const embed = new Discord.MessageEmbed()
  
    .setTitle(`📚|Exemplares`)
    .setAuthor(`©Santzz`, `https://i.imgur.com/Goe4f1o.png`,'https://discord.gg/hGb9j9E')
    .setColor("#FD1438")
    .setImage('https://i.imgur.com/w688FrV.png')
    .setThumbnail('https://i.imgur.com/Goe4f1o.png')
    .setDescription(`<a:typingstatus:778044321428668417> **Para obter mais exemplares do meu trabalho reaja aos emojis.**`)


  .addField(`Categoria : Logotipos`,`Reaja ao emoji | ${logo}`)
  .addField(`Categoria : Banners`,`Reaja ao emoji | ${banner}`)
  .addField(`Categoria : Flyers`,`Reaja ao emoji | ${flyer}`)
  .addField(`Categoria : Social media`,`Reaja ao emoji | ${equip}`)

  .addField(`Categoria : Logo gif`,`Reaja ao emoji | ${lgif}`)

  .addField(`Categoria : GIFbar`,`Reaja ao emoji | ${gif}`)

  .addField(`Categoria : Mais`,`Reaja ao emoji | ${outros}`)

.addField(`Aviso :`,"`Depois de reagir vai aparecer novos canais referente aos emojis.`")

.addField(`${warn} | PROIBIDO :`,"`PROIBIDO VENDER OS EXEPLARES!.`")

    
    .setFooter(`©Santzz Direitos reservados.`)

 message.channel.send(embed);

    



 
 };