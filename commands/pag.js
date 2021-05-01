const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let guild =  client.guilds.cache.get("728814862473625691");
 
 

 let banner = message.guild.emojis.cache.find(emoji => emoji.name === 'emoji_2');

 let ps = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobePsicon');

 let ae = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobeAeicon'); 

 let fix = message.guild.emojis.cache.find(emoji => emoji.name === 'fix');

 let very = message.guild.emojis.cache.find(emoji => emoji.name === 'verificado')

 let din = message.guild.emojis.cache.find(emoji => emoji.name === 'DinheiroVoando')

let paypal = message.guild.emojis.cache.find(emoji => emoji.name === 'paypal')

let mercado = message.guild.emojis.cache.find(emoji => emoji.name === 'mercado_pago_HCR')

  const embed = new Discord.MessageEmbed()
  
    .setTitle(`${din}|PAGAMENTOS`)

    .setAuthor(`©Santzz`)

    .setColor("#ff0053")


    .setDescription(`${fix} GMAIL'S 
    
    ${mercado} | GMAIL DO MERCADO PAGO | Juniorcambraiacelula@gmail.com 
    
    ${paypal} | GMAIL DO PAYPAL | luanmotog11@gmail.com
    `)
 

    
    .setFooter(`©Santzz Direitos reservados.`)

 message.channel.send(embed);

    



 
 };