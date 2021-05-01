const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
   if (!message.member.permissions.has("ADMINISTRATOR")) {
   return message.channel.send("Você é fraco lhe falta permissão de ` Administrador`!")
 }

   return message.channel.send(`Qual será o prefix?`).then(msg => {
     const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, {max: 1});

collector.on('collect', m => {
  const prefix = m.content;
  if (prefix.length > 4) {
    return msg.channel.send(`prefix tem que ser menor!!!`)
  
  } else {
	message.channel.send(`Você tem certeza que deseja alterar o prefix para: ${m.content}`).then(msg => {
   msg.react('✅');
   msg.react('❌')

    const sim = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `✅` && user.id == message.author.id, { time: 10000 }) //time: tempo, 1000 = 1sec, 10000 = 10sec

    const não = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `❌` && user.id == message.author.id, { time: 10000 }) //time: tempo, 1000 = 1sec, 10000 = 10sec

    sim.on(`collect`, r => {
      db.set(`prefix_${message.guild.id}`, m.content)
     return msg.channel.send(`prefix alterado para: ${m.content}`)
    })
    não.on(`collect`, r => {
      return msg.channel.send(`cancelado com sucesso!`)
    })
  })
  }
});

collector.on('end', collected => {

});
   })

}