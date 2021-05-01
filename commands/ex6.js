const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if(!['700157765053841438'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")

  let guild =  client.guilds.cache.get("778715942405668865");
 
 

 let banner = message.guild.emojis.cache.find(emoji => emoji.name === 'emoji_2');

 let ps = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobePsicon');

 let ae = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobeAeicon'); 

 let fix = message.guild.emojis.cache.find(emoji => emoji.name === 'fix');

 let very = message.guild.emojis.cache.find(emoji => emoji.name === 'verificado')

 let veri = message.guild.emojis.cache.find(emoji => emoji.name === 'VERIFICADO')

 let din = message.guild.emojis.cache.find(emoji => emoji.name === 'DinheiroVoando')

let paypal = message.guild.emojis.cache.find(emoji => emoji.name === 'paypal')
message.delete()
  const embed = new Discord.MessageEmbed()
  .setURL(`https://www.behance.net/Santzz`)
    .setTitle(`clique aqui`)

    .setAuthor(`📔│Portfólio`, 'https://i.imgur.com/Goe4f1o.png','https://discord.gg/RxPSF2d')

    .setThumbnail
    ('https://i.imgur.com/Goe4f1o.png')

    .setColor("#ff0053")

    .setDescription(`**Esse é meu portfólio "ainda preciso acabar..." mais por enquanto ainda tem alguma coisa.**\n\n\nhttps://www.behance.net/Santzz`)
 
.setImage(`https://i.imgur.com/by1DIMZ.png`)
    
    .setFooter(`©Santzz Direitos reservados.`)

 message.channel.send(embed);

    



 
 };