const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if(!['667817180028469288'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")

 let guild =  client.guilds.cache.get("778715942405668865");
 let banner = message.guild.emojis.cache.find(emoji => emoji.name === 'emoji_2');
 let ps = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobePsicon');
 let ae = message.guild.emojis.cache.find(emoji => emoji.name === 'AdobeAeicon'); 
 let fix = message.guild.emojis.cache.find(emoji => emoji.name === 'fix');
 let very = message.guild.emojis.cache.find(emoji => emoji.name === 'verificado')
 let din = message.guild.emojis.cache.find(emoji => emoji.name === 'DinheiroVoando')
let paypal = message.guild.emojis.cache.find(emoji => emoji.name === 'paypal')
let mercado = message.guild.emojis.cache.find(emoji => emoji.name === 'mercado_pago_HCR')

let check = `<:check:778044928914751549>`;
let dev = `<:discord_bot_dev:778310572139085874>`;
let avis = `<:infom:778311038407278604>`;
let auth = `<:authorized:778044785935515648>`;
let ir = `<a:Discord:749753525629747424>`;
message.delete()
  const embed = new Discord.MessageEmbed()

       .setColor("#ff0053")
       .setImage('https://i.imgur.com/lxuIUcf.png')
       .setAuthor(message.guild.name , message.guild.iconURL())
       .setThumbnail(message.guild.iconURL())
       .setTitle(`📦・Produtos & forma de pagamento`)
       .setDescription(`${check}・**Produtos**
       ${fix}・***Logotipo*** ${ps}
       ${fix}・***Logo GIF*** ${ps}/${ae}
       ${fix}・***Banner/Header*** ${ps}
       ${fix}・***Flyer*** ${ps}
       ${fix}・***Overlay*** ${ps}/${ae}
       ${fix}・***Barra animada*** ${ps}/${ae}
       ${fix}・***Bot já configurado*** ${dev}\n
       ${avis}・` + "`Combo de arts discutir no PV`" + `

       ${check}・**Formas de Pagamento**
       ${fix}・***Mercado Pago*** ${mercado}
       ${fix}・***PayPal*** ${paypal}\n
       ${avis}・`+ "`Taxas ao pagar com paypal.`" + `
       ${auth}・`+ "`Preços a discutir no privado.`" + `

       📚・**[Ir Para os exemplares](https://discord.com/channels/728814862473625691/728830835381370901/783420177534418964)**`)

  
 message.channel.send(embed);

    



 
 };