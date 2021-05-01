const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {

 
    
    
    let replies = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'


    ];

    let result = Math.floor((Math.random() * replies.length));
    

    let embed = new Discord.MessageEmbed()
    .setTitle("🎲 Dado!!!")
    .setColor("RANDOM")
    .setThumbnail("https://www.imagensanimadas.com/data/media/710/dado-imagem-animada-0104.gif")
    
    .addField("🎲 Numero da vez ééééé:", replies[result])
    .setFooter(`©Santzz Direitos reservados ${customisation.ownername}`);

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: '8ball',
    description: 'Ask the bot a Question.',
    usage: '8ball (question)'
  };
  