const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");


exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("😸 Aqui estar o seu gato.")
    .setImage(body.file) 
    .setFooter(`Por ${message.author.username}`)
    .setTimestamp()
    message.channel.send({embed});
};

