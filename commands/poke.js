const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Você precisa mencionar alguem!");
    if (message.mentions.users.first().id === client.user.id) return message.channel.send('<a:yayyy:497742636439044096>');
    if (message.mentions.users.first().id == message.author.id) return message.reply("Idk if thats possible chief")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke")
    .catch(e => {
      if(e) {
        message.channel.send("Opa, algo quebrou ...")
        console.log(e)
      }
    })
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, Você foi tocado por ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`${message.author.username}`);
    message.channel.send({embed})
};

