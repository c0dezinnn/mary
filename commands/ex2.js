const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if(!['667817180028469288'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")

let aviso = `<:aviso:778311007616499803>`;
message.delete()
  const embed1 = new Discord.MessageEmbed()
  
      .setAuthor(message.guild.name , message.guild.iconURL())
      .setColor("#ff0000")
      .setThumbnail(`https://www.diariodenatal.com.br/wp-content/uploads/2016/01/regras-abono-salarial.png`)
      .setTitle("📃・Regras servirdor Thaváres")
      .setDescription(`⠀\n***(1.0)***・**COMERCIO**\nProibido comercio de bots, Desing, produtos ilegais, etx.\n⠀\n***(2.0)***・**PRECONCEITO**\nOfender alguém por sua crença, cor, condição física ou financeira, etc.` + '`Passivo de Banimento!`' + `\n⠀\n***(3.0)***・**FLOOD**\nInciar flood ou spam tanto no PV dos Membros, ou no chat do servidor tanto de imagem como de mensagem links, etc.` + '`Passivo de Banimento!`' + `\n⠀\n***(4.0)***・**OFENSA**\nOfender Membros ou staff é estritamente proibido.` + '`Passivo de Mute!`' + `\n⠀\n***(5.0)***・**IRL**\nProibido IRL (mídias da vida real). Pedofilia, brigas, gore, ou qualquer conteúdo criminoso.` + '`Passivo de Banimento IMEDIATO!`' + `\n⠀\n***(6.0)***・**FRAUDE**\nProibido se passar por alguém para conseguir algo. É caracterizado crime de (falsa identidade) [Artigo 307](https://www.direitonet.com.br/artigos/exibir/1513/Crime-de-falsa-identidade).` + '`Passivo de Banimento IMEDIATO!`' + ``)


 await message.channel.send(embed1);

    const embed2 = new Discord.MessageEmbed()

      .setColor("#fc4103")
      .setDescription(`\n***(7.0)***・**AVATAR INAPROPRIADO**\nProibido uso de avatar inapropriado tanto com pornografia explicita quanto como invisível..\n⠀\n***(8.0)***・**DIVULGAÇÂO**\nProibido divulgar servidores no privado ou nos chats do servidor.` + '`Passivo de Banimento ou Expulsão`' + `\n⠀\n***(9.0)***・**FALHAS**\nE proibido abusar de qualquer falha do servidor.` + '`Passivo de Banimento ou Expulsão`' + `\n⠀\n***(1.1)***・**BADERNA**\nCaso entre no servidor apenas para causar zona ou para mera divulgação, *sera banido de imediato*.`)

      await message.channel.send(embed2);

      const embed3 = new Discord.MessageEmbed()

      .setColor("#fc6f03")
      .setImage("https://i.imgur.com/LKmcSwe.png")
      .setDescription(`${aviso}・***REGRAS?***\nAlegar que não conhece as regras, não significa que não vai ser punido.`)
      .setFooter(message.guild.name , message.guild.iconURL())

      await message.channel.send(embed3).then(async msg => {
     
      await msg.react("782645875276513320");
   
    });
 };