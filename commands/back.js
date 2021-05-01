const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
if(!['700157765053841438'].includes(message.author.id)) return message.channel.send("Você não tem permissão.")

  let guild =  client.guilds.cache.get("741810958057472000");
 
 

 let banner = message.guild.emojis.cache.find(emoji => emoji.name === 'emoji_2');

let fix = message.guild.emojis.cache.find(emoji => emoji.name === 'fix');

 let very = message.guild.emojis.cache.find(emoji => emoji.name === 'verificado')
message.delete()
  const embed = new Discord.MessageEmbed()
  
    .setTitle(`📔|Regras`)

    .setAuthor(`©Santzz`, 'https://i.imgur.com/Goe4f1o.png','https://discord.gg/RxPSF2d')

    .setThumbnail
    ('https://i.imgur.com/Goe4f1o.png')

    .setColor("#FD1438")

    .setImage
    ('https://i.imgur.com/LKmcSwe.png')

    .setDescription(` ${banner}**Seguir as regras para evitar ser punido.**;`)
  .addField(`**Regras**`,`
   **1°**.${fix} Proibido fazer comercio de bots, contas, jogos,  programas ilegais, design, etc.

  **2°**.${fix} Proibido iniciar Flood ou Spam nos chats.

  **3°**.${fix}Proibido brigas, ou ofender tanto a Staff como membros do servidor.

  **4°**.${fix}Proibido compartilhamento de qualquer tipo de pornografia.

  **5°**.${fix}Proibido roubo ou fraude, se passar por outra pessoa em troca de algo.

  **6°**.${fix}Proibido usar Avatares e Nomes inapropriados. Usar Avatares e Nomes invisíveis também.

  **7°**.${fix}Proibido qualquer forma de Desrespeito, Preconceito, incluindo racismo.

  **8°**.${fix}Qualquer divulgação de outros servidores em nosso servidor ou em privado.

  **9°**.${fix}Abusar de qualquer falha em nosso servidor do Discord ou do NOSSO servidor.`)

    
    .setFooter(`©Santzz Direitos reservados.`)

 message.channel.send(embed);

    



 
 };