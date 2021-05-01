const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

 let user = message.mentions.users.first()
 if (!user) {
   return message.reply("Mencione um usuário válido")
 }

 let quantidade = args.splice(1).join(' ');
 if (!quantidade) {
   return message.reply(`<a:V_moneyATL:755452114561400893> **|** ${message.author}, diga quanto você quer apostar!`)
 } 

 if (user.id === message.author.id) {
   return message.channel.send(`<:error:759104378048872478> **|** ${message.author}, Você pode se auto apostar a si mesmo`)
 }
 if (user.id === client.user.id) {
   return message.channel.send(`<:error:759104378048872478>  quer apostar comigo? Vai perder feio!`)
 }
 if (message.mentions.users.first().bot) {
   return message.channel.send(`<:error:759104378048872478> **|** ${message.author}, Você não pode apostar com um bot!`)
 }

 	let money = db.fetch(`dinheiro_${message.author.id}`);
  if (money < quantidade) {
    return message.channel.send(`${message.author}, Como você vai apostar sem dinheiro?`)
  }
 	let money2 = db.fetch(`dinheiro_${user.id}`);
  if (money2 < quantidade) {
    return message.channel.send(`${message.author}, Você não tem money suficientes`)
  } 
  
  var list = [
  `${user} ganhou ${quantidade} moneys financiados por ${message.author} rsrsrs`,
  `${message.author} ganhou ${quantidade} moneys finaciados por ${user} rsrsrs`
];

var rand = list[Math.floor(Math.random() * list.length)];
  
  {
    return message.channel
			.send(`${user} voce quer apostar ${quantidade} moneys com ${message.author}? Se sim, reaja com o emoji: 👍`)
			.then(msg => {
				msg.react('👍');

				let filtro = (reaction, usuario) =>
					reaction.emoji.name === '👍' && usuario.id === user.id;
				let coletor = msg.createReactionCollector(filtro, { max: 1 });

				coletor.on('collect', cp => {
					msg.delete();
					cp.remove(message.author.id);
					message.channel.send(rand);

          if(rand === `${user} ganhou ${quantidade} moneys financiados por ${message.author} rsrsrs`) {
            db.add(`dinheiro_${user.id}`, quantidade)
            db.subtract(`dinheiro_${message.author.id}`, quantidade)
          }
          if(rand === `${message.author} ganhou ${quantidade} moneys finaciados por ${user} rsrsrs`) {
             db.add(`dinheiro_${message.author.id}`, quantidade)
            db.subtract(`dinheiro_${user.id}`, quantidade)
          }

				});
			});
  }
exports.help = { 
  name: "coinflip",
  aliases: ["x1","coinflip-bet"]
}


}