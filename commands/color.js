const Discord = require('discord.js');
const AlexAPI = require('alexflipnote.js')
const AlexClient = new AlexAPI()

exports.run = async (client, message, args) => {
  if(!args[0] || args[0] === 'help') return message.reply("Please provide a valid hex code without the #")
  var isOk = /^[0-9A-F]{6}$/i.test(args[0])
  if (isOk === false) return message.reply("Please provide a valid hex code without the #")
  
  let body = await AlexClient.others.color(args[0])
  
  const embed = new Discord.MessageEmbed()
  .setColor("#isOk")
  .setTitle(`Nome | ${body.name}`)
  .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
  .setImage(body.image) 
  .setFooter(`Por ${message.author.username}`);
  message.channel.send({embed});
};
