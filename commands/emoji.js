const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
    exports.run = async (bot,message,args)=>{
const emoji = args[0];
if (!emoji) return message.channel.send("Nenhum emoji fornecido!");

let custom = Discord.Util.parseEmoji(emoji);

if (custom.id) {
   const embed = new Discord.MessageEmbed()
      .setTitle(`↕️ Aqui estar a versão ampliada de ${emoji}`)
      .setColor("#FFFF00")
      .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
   return message.channel.send(embed);
} else {

   let parsed = parse(emoji, { assetType: "png" });
   if (!parsed[0]) return message.channel.send("Emoji invalido,  tente novamente com outro");
   const embed = new Discord.MessageEmbed()
      .setTitle(`↕️ Aqui estar a versão ampliada de ${emoji}`)
      .setColor("#FFFF00")
      .setImage(parsed[0].url);
   return message.channel.send(embed);
}
    }