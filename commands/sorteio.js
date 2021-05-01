const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) {
    return message.channel.send(`Voce nao tem permissao de \`administrador\`!`)
  }
  message.channel.send(`Qual vai ser o canal do sorteio?`).then(msg => {
    const filter = m => m.author.id === message.author.id;
    const collector = message.channel.createMessageCollector(filter, {max: 1});

    collector.on('collect', m => {
      let canal = m.mentions.channels.first()
      if (!canal) {
        return message.channel.send(`:x: Mencione um canal.`)
      } else {
        return message.channel.send(`Ok, agr qual e o titulo do sorteio?`).then(msg => {
        const filter = c => c.author.id === message.author.id;
        const collector2 = message.channel.createMessageCollector(filter, {max: 1});

        collector2.on('collect', c => {
          let titulo = c.content;
          if (titulo.length > 20) {
            return message.channel.send(`O titulo tem que ser menor!`)
          } else {
            return message.channel.send(`Ok, agr qual e o premio?`).then(msg => {
              const filter = d => d.author.id === message.author.id;
              const collector3 = message.channel.createMessageCollector(filter, {max: 1});

              collector3.on(`collect`, d => {
                let premio = d.content;
                if (premio.length > 40) {
                  return message.channel.send(`premio tem que ser menor!`)
                } else {
                 return message.channel.send(`Qual vai ser o tempo do sorteio?`).then(msg => {
                  const filter = ml => ml.author.id === message.author.id;
                  const collector4 = message.channel.createMessageCollector(filter, {max: 1});

                  collector4.on('collect', async ml => {
                    time = await ml.content.toString();
  
                   if (time.indexOf('s') !== -1) { // Segundos
                   var timesec = await time.replace(/s.*/, '');
                   var timems = await timesec * 1000;
                } else if (time.indexOf('m') !== -1) { // Minutos
                 var timemin = await time.replace(/m.*/, '');
                 timems = await timemin * 60 * 1000;
                 } else if (time.indexOf('h') !== -1) { // Horas
                 var timehour = await time.replace(/h.*/, '');
                 timems = await timehour * 60 * 60 * 1000;
                 } else if (time.indexOf('d') !== -1) { // Dias
                 var timeday = await time.replace(/d.*/, '');
                 timems = await timeday * 60 * 60 * 24 * 1000;
                 }    else {
                 return message.reply('Insira o tempo desejado! `[s/m/h/d]`');
                 }
                 try {
               let embed = new Discord.MessageEmbed() 
               .setTitle(`${titulo} - sorteio!`)
               .addField(`Premio`, `${premio}`)
               .setFooter(`sorteio por ${message.author.username}`, message.author.displayAvatarURL({ format: "png" }))
               .setColor("ORANGE")
               .setTimestamp()
               canal.send(embed).then(msg => {
                 let participantes = []
                 msg.react('🎉')
                 const sim = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🎉`)

                 sim.on(`collect`, async (emoji, user) => {
                   switch (emoji._emoji.name) {
                     case '🎉': 
                     participantes.push(user.id)
                     break;
                     default:
                     break;
                   }
                 })

                 sim.on(`dispose`, async (emoji, user) => {
                   switch (emoji._emoji.name) {
                     case '🎉':
                      let index = participantes.indexOf(user.id)
                      if (index > -1) {
                        participantes.splice(index, 1)
                      }
                      break;
                      default:
                       break;
                   }
                 })
                 setTimeout(function () {
                   
                  if (!participantes.length == 0) {
                  let winner = msg.reactions.cache
                 .get("🎉")
                 .users.cache.filter((u) => !u.bot)
                 .random();
                 message.channel.send(`acabou o sorteio! O vencedor foi: ${winner}`);
                 let acabo = new Discord.MessageEmbed()
               .setTitle(`${titulo} - sorteio!`)
               .setDescription(`Sorteio acabou...`)
               .addField(`Ganhador`, `${winner}`)
               .addField(`premio`, `${premio}`)
               .setFooter(`sorteio por ${message.author.username}`, message.author.displayAvatarURL({ format: "png" }))
               .setColor("ORANGE")
               .setTimestamp()
               msg.reactions.removeAll()
                 msg.edit(acabo)
                  } else {
                     let acabou = new Discord.MessageEmbed()
               .setTitle(`${titulo} - sorteio!`)
               .setDescription(`Sorteio acabou... Ninguem participou...`)
               .addField(`premio`, `${premio}`)
               .setFooter(`sorteio por ${message.author.username}`, message.author.displayAvatarURL({ format: "png" }))
               .setColor("ORANGE")
               .setTimestamp()
                    message.channel.send(`ninguem participou do sorteio...`)
                    msg.edit(acabou)
                  }
                 }, parseInt(timems));
                 })
                 } catch (err) {
                  return message.channel.send(`erro... ${err}`)
                  }
                  })
                 })
                }
              })
            })
          }
        })
      })
    }
  })
})
}