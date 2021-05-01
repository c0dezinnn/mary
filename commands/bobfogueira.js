const Discord = require('discord.js');
const Canvas = require('canvas');


exports.run = async (client, message, args) => {
  
  
  const queimado = message.mentions.users.first();
  
  if (!queimado) {
    message.channel.messages.fetch().then(async (messages) => {

      const lastAttach = messages.sort((a, b) => b.createdTimestamp - a.createdTimestamp).filter((m) => m.attachments.size > 0).first();

      if (!lastAttach) {
        return message.channel.send(`Procurei usuarios e imagens mas n encontrei nada :( tente de novo`)
      }

      const image = await Canvas.loadImage(lastAttach.attachments.first().url);

      var centro = "https://imgur.com/n7zGrkz.jpg"

       var fundo = await Canvas.loadImage(centro)

       const canvas = Canvas.createCanvas(450, 600);
  
    const ctx = canvas.getContext('2d');
       ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
     
     ctx.drawImage(image, 39, 85, 133, 172)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'queimado.png');

  await message.channel.send(attachment);
    })
  } else {    
    
  try {
    const avatar = queimado.displayAvatarURL({format: "png"})

    var centro = "https://imgur.com/n7zGrkz.jpg"


    const canvas = Canvas.createCanvas(450, 600);
  
    const ctx = canvas.getContext('2d');
  var fundo = await Canvas.loadImage(centro);
  
  var avatur = await Canvas.loadImage(avatar)
  
     ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height);
     
     ctx.drawImage(avatur, 39, 85, 133, 172)
     
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'queimado.png');

  await message.channel.send(attachment);

  } catch (err) {
    console.log(err);
  }
  }
}
