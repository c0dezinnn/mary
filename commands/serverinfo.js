  
const Discord = require("discord.js");

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " Dia" : " Dias") + " atrás";
};
exports.run = (client, message, args) => {
     
const { guild } = message;
    let verifLevels = ["Nenhuma", "Baixo", "Medio", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": "🇧🇷Brasil",
        "eu-central": "🇪🇺Central Europe",
        "singapore": "🇸🇬Singapore",
        "us-central": "🇺🇸U.S. Central",
        "sydney": "🇦🇺Sydney",
        "us-east": "🇺🇸U.S. East",
        "us-south": "🇺🇸U.S. South",
        "us-west": "🇺🇸U.S. West",
        "eu-west": "🇪🇺Western Europe",
        "vip-us-east": "🇺🇸VIP U.S. East",
        "london": "	🇬🇧London",
        "amsterdam": "🇳🇱Amsterdam",
        "hongkong": "🇭🇰Hong Kong"
    };
    
    var emojis;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 'None';
    } else {
        emojis = message.guild.emojis.cache.size;
    }
 

    const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .addField("📅 Criado", `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
  .addField("ℹ️ ID", message.guild.id, true)
  .addField("👑 Dono", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)

  .addField("🌎 Região", region [message.guild.region], true)

  .addField("👥 Numero de membros", `**${message.guild.memberCount}** *Membros*`, true)
  

  .addField("👤 Numero de Membros Reais", `**${message.guild.members.cache.filter(m => !m.user.bot).size}** *Reais*`, true)

  .addField("🤖 Numero de bots", `**${message.guild.members.cache.filter(m => m.user.bot).size}** Bots`, true)

  .addField("⏳ Tempo AFK",`**${message.guild.afkTimeout / 60 + ' Minutos'}**`, true)

  .addField("🗃️ Cargos", `**${message.guild.roles.cache.size}** *Cargos*`, true)

  .addField("🗨️ Canais", `⚜️ Total de canais **${message.guild.channels.cache.size}**\n💬 Total de canais de texto **${ guild.channels.cache.filter(ch => ch.type === 'text').size}**\n🗣️ Canais de voz **${ guild.channels.cache.filter(ch => ch.type === 'voice').size}**`, true)


  .addField("☺️ Emojis", `**${emojis}/100**`, true)

  .addField("🎚️ Nivel de Verificação", `**${message.guild.verificationLevel}**`, true)

  .setColor(Math.floor(Math.random()*16777215))
  .setFooter(`${message.author.username}`, message.author.avatarURL());
  message.channel.send({embed});


    }


