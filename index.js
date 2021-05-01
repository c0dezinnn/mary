const express = require('express');
const app = express();
app.get('/', (request, response) => {
	response.sendStatus(200)
  console.log('pingzão brabo')
});
app.listen(3000); // Recebe solicitações que o deixa online



const Discord = require('discord.js');
const Topgg = require('@top-gg/sdk');
const db = require('quick.db');
const Canvas = require('canvas');
const client = new Discord.Client(); //Criação de um novo Client
const config = require('./config.json'); //Pegando o prefixo do bot para respostas de comandos
const fs = require('fs')
 const eventFiles = fs.readdirSync('./event').filter(file => file.endsWith('.js'));


  // pasta de comandos
const mySecret = process.env['TOKEN']

  
    
    
	client.on('message', message => {
    if (message.channel.type == 'dm') return;
    let guild = message.guild;
    if (guild === null) return;
    let prefixS = db.fetch(`prefix_${message.guild.id}`)
    if (prefixS === null) prefixS = config.prefix;
		if (message.author.bot) return;
		if (!message.content.startsWith(prefixS)) return;
    if (message.webhookID) return;
    
		if (
			message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)
		) return;
     
		const args = message.content
			.trim()
			.slice(prefixS.length)
			.split(/ +/g);
		const command = args.shift().toLowerCase();
     if (command.lenght === 0) return;
			try {
				const commandFile = require(`./commands/${command}.js`);
				 commandFile.run(client, message, args);

let user = db.get(`blacklist_${message.author.id}`);
    if(user == true) return message.channel.send('You are blacklisted!');

			} catch (err) {
		   
       console.log(err)
			 return message.channel.send("<a:maryerror:833417680311681052>|esse comando não existe no meu banco de dados.")
     
			} 
  });




const api = new Topgg.Api(process.env.TOPTOKEN)

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    
  })
}, 1800000) // post every 30 minutes



 // mencao

  client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == 'dm')
return
if(message.content == '<@767868534645719050>' || message.content == '<@!767868534645719050>') {
const embed = new Discord.MessageEmbed()
.setColor(`WHITE`)
.setDescription(`Olá ${message.author} meu nome é Mary, Um bot para divertir e auxiliar seu servidor, Melhorando ele com meus comandos!

Meu prefixo:
\`${config.prefix}\`

Servidor de suporte:
https://discord.gg/cPpaKp3tgU
`)

message.channel.send(embed)
}
});

  client.on("message", message => {
if (message.author.bot) return;
if (message.channel.type == 'dm')
return
if(message.content == '<@700157765053841438>' || message.content == '<@!700157765053841438>') {
const embed = new Discord.MessageEmbed()
.setColor(`WHITE`)
.setDescription(`Olá ${message.author} Mencionou meu dono kk!

Meu prefixo:
\`${config.prefix}\`


`)

message.channel.send(embed)
}
});



client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`,
      `Meu criador </C0de>#7777`
      

    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      .catch(console.error);
console.log("Estou Online!")
});

client.on("ready", () => {
  let activities = [
      `Em busca de divertir pessoas!`,
      `Me adicione em seu servidor! Isso ajuda demais!`,
      `Se tiver dúvidas mande para meu criador </C0de>#7777`,
      `vendo pessoas usarem C0de na loja do fortnite`,
      `Use ${config.prefix}help para ter informações dos meus comandos!`,
      `quero pizza`,
      `entre no meu servidor de minecraft que não existe`,
      `Estou em ${client.guilds.cache.size} Servidores!`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 200 * 60); 
  client.user
      .setStatus("um bot incrivel")
      .catch(console.error);
console.log("Estou Online!")
})

 
  
 client.login(process.env.TOKEN);   