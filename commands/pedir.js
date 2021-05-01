const Discord = require("discord.js");
const { Client, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  let arrayMsg = message.content.split(' ')
  let args1 = arrayMsg.slice(1)
  let command = arrayMsg[0]

/*Data/Hora*/
let temp = new Date()
let ano = temp.getFullYear()
let mes = temp.getMonth() + 1
let dia = temp.getDay()

let hora2 = temp.getHours()
if(hora2 >= 3) {hora1 = hora2-3}
if(hora2 <= 1) {hora1 = hora2+21}
if(hora2 === 2) {hora1 = 23}
if (hora1 < 10) hora = `0`+hora1
  else{
    let temp = new Date()
    var hora = hora1
  }

let minuto1 = temp.getMinutes()
  if (minuto1 < 10) minuto = `0`+minuto1
  else{
    let temp = new Date()
    var minuto = temp.getMinutes()
  }

let segundo1 = temp.getSeconds()
  if (segundo1 < 10) segundo = `0`+segundo1
  else{
    let temp = new Date()
    var segundo = temp.getSeconds()
  }


    const tags = message.member.roles.cache.map(role => role.toString()).join(' ');
    if(tags.toLowerCase().includes('796793551974301776') || tags.toLowerCase().includes('797547805030744105') || tags.toLowerCase().includes('771222438121570344') || tags.toLowerCase().includes('798009539638853693')) {
      if(hora < 09 || hora >= 23) {
        if(hora == 23) {var relo = '🕚'}
        if(hora == 00) {var relo = '🕛'}
        if(hora == 01) {var relo = '🕐'}
        if(hora == 02) {var relo = '🕑'}
        if(hora == 03) {var relo = '🕒'}
        if(hora == 04) {var relo = '🕓'}
        if(hora == 05) {var relo = '🕔'}
        if(hora == 06) {var relo = '🕕'}
        if(hora == 07) {var relo = '🕖'}
        if(hora == 08) {var relo = '🕗'}
        let embed = new MessageEmbed()
          .setTitle(`**O cabaré esta fechado!**`)
          .setDescription(`${relo} | Agora é **${hora}:${minuto}** | Abre as __09:00__ e fecha __23:00__`)
          .setColor('FC0101')
        message.channel.send({ embed })
      } else {
    let p1 = '797663030888366090' //Emy
    let p2 = '775333256420917289' //Asuna
    let p3 = '764202228113866853' //Harumi
    let p4 = '760876771527622686' //loli
    let p5 = '424730544123936778' //lary
    let p0 = '773197642616274997' //  LS --- para testes
    
    //message.channel.startTyping(6000);
    if(args1 != 'p2'&& args1 != 'p1'&& args1 != 'p3' && args1 != 'p4' && args1 != 'p5'/* && args1 != 'p0'*/){
      let embed = new MessageEmbed()
        .setDescription('Escolha a garota em <#797911573212954625> e diga o digito correspondente\n\nExemplo:\n`!pedir p1`\n`!pedir p2`\n`!pedir p3`')
        .setColor('FF06E4')
    message.channel.send({ embed })
    } else {
    //if(args1 === 'p1' || 'p2' || 'p3' || 'p4' ) {
      if(args1 == 'p1'){var pedido = p1}
      if(args1 == 'p2'){var pedido = p2}
      if(args1 == 'p3'){var pedido = p3}
      if(args1 == 'p4'){var pedido = p4}
      if(args1 == 'p5'){var pedido = p5}
      //if(args1 == 'p0'){var pedido = p0}
        let embed = new MessageEmbed()
          .setDescription(`<@${message.author.id}> | Solicitar <@${pedido}>?`)
          .setColor('FF06E4')
        let ult = message.channel.lastMessage
      let enviar = message.channel.send({ embed }).then(msg => {
        msg.react('✅')
        msg.react('❎')
  
  
      let filtroV = (reaction, user) => reaction.emoji.name == '✅' && user.id == message.author.id
        let collectorV = msg.createReactionCollector(filtroV)
        .on('collect', r => {
          msg.delete()
          let embed = new MessageEmbed()
            .setDescription(`✅ | Pedido de programa enviado para <@${pedido}>!\nAguarde uma resposta, te avisarei aqui`)
            .setColor('77B255')
          message.channel.send({ embed })
          client.users.fetch(`${pedido}`).then(user => {
            let embed = new MessageEmbed()
              .setDescription(`Programa pedido por **${message.author.username}#${message.author.discriminator}**\n\n✅ - Aceitar\n❎ - Recusar\n⠀`)
              .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)
              .setColor('FF06E4')
              .setFooter(`Servidor: ${message.guild.name}`, `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.gif?size=2048`)
            let enviar1 = user.send({ embed }).then(msg => {
              msg.react('✅')
              msg.react('❎')
  
              let filtroVV = (reaction, user) => reaction.emoji.name == '✅' && user.id == pedido
              let collectorVV = msg.createReactionCollector(filtroVV)
              .on('collect', r => {
                msg.delete()
                let embed = new MessageEmbed()
                  .setDescription(`O seu pedido foi aceito por <@${pedido}>`)
                  .setColor('77B255')
                message.channel.send(`<@${message.author.id}> chame <@${pedido}> na DM, ela esta aguardando sua mensagem`)
                message.channel.send({ embed })
                user.send(`✅ | Pedido de **${message.author.username}#${message.author.discriminator}** foi aceito com sucesso! O cliente te chamará na DM`)
              })
  
              let filtroXX = (reaction, user) => reaction.emoji.name == '❎' && user.id == pedido
              let collectorXX = msg.createReactionCollector(filtroXX)
              .on('collect', r => {
                msg.delete()
                message.channel.send(`<@${message.author.id}> o seu pedido de programa foi recusado por <@${pedido}>!`)
                user.send(`✅ | Pedido de **${message.author.username}#${message.author.discriminator}** foi recusado com sucesso!`)
              })
            })
            
          })
        })
      let filtroX = (reaction, user) => reaction.emoji.name == '❎' && user.id == message.author.id
        let collectorX = msg.createReactionCollector(filtroX)
        .on('collect', r => {
          msg.delete()
          let embed = new MessageEmbed()
            .setDescription(`❌ | Pedido de programa para <@${pedido}> foi cancelado!`)
            .setColor('FC0101')
          message.channel.send({ embed })
        })
      })
     }
    } 
   }
   if(tags.toLowerCase().includes('796793551974301776') || tags.toLowerCase().includes('797547805030744105') || tags.toLowerCase().includes('771222438121570344') || tags.toLowerCase().includes('798009539638853693')) {
  } else {
    let embed = new MessageEmbed()
       .setDescription('**❌ | Você não tem o <@&797547805030744105>!**\nPara saber como conseguir o passe leia o chat <#797837523245858817>')
       .setColor('FC0101')
  message.channel.send({ embed })
   }
}