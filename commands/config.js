const Discord = require('discord.js');
const config = require('../config.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 message.delete().catch(O_o => {});

 if (!message.member.permissions.has("ADMINISTRATOR")) {
   return message.channel.send("Você é fraco lhe falta permissão de ` Administrador`!")
 }

  if (args[0] === "addbot") {
    let logsbot = db.get(`logsBot_${message.guild.id}`)
    if (logsbot === null) logsbot = `deleted-channel`;
    let testador = db.get(`roleTestador_${message.guild.id}`)
    if (testador === null) testador = `deleted-role`;
    let aprovado = db.get(`botAprovado_${message.guild.id}`)
    if (aprovado === null) aprovado = `deleted-role`;
    let cargoDev = db.get(`cargoDev_${message.guild.id}`)
    if (cargoDev === null) cargoDev = `deleted-role`;
    let remove = db.get(`removeCargo_${message.guild.id}`)
    if (remove === null) remove = `deleted-role`;
    let addbot2 = db.get(`addbot_${message.guild.id}`)
    if (addbot2 === null) addbot2 = `off\npara setar: 📌`;
    if (addbot2 === 1) addbot2 = `on\npara desligar: ⭕`;
    let addbot = new Discord.MessageEmbed()
    .setTitle(`Addbot - ${message.guild}`)
    .addField(`Canal de logs bots`, `<#${logsbot}>\nsetar: 🍄`, true)
    .addField(`Role de testador`, `<@&${testador}>\nsetar: ⚠️`, true)
    .addField(`Cargo de bot aprovado`, `<@&${aprovado}>\nsetar: ✅`, true)
    .addField(`Cargo removido do bot aprovado`, `<@&${remove}>\nsetar: :x:`, true)
    .addField(`Cargo de dev`, `<@&${cargoDev}>\nsetar: 👾`, true)
   .setDescription(`O sistema de addbot esta: ${addbot2}`)
    return message.channel.send(addbot).then(msg => {
      msg.react('📌');
      msg.react('⭕');
      msg.react('🍄');
      msg.react('⚠️');
      msg.react('✅');
      msg.react('❌');
      msg.react('👾')

       const logsBot = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `🍄` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

       const testadorCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⚠️` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

       const aprovadoCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `✅` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

       const devCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `👾` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

        const removeCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `⭕` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

        const sistemaOn = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `📌` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

        const sistemaOff = msg.createReactionCollector((reaction, user) => reaction.emoji.name == `` && user.id == message.author.id) //time: tempo, 1000 = 1sec, 10000 = 10sec

        sistemaOff.on(`collect`, r => {
         db.delete(`addbot_${message.guild.id}`, addbot2)
         return message.channel.send(`retirado com sucesso!`)
        })

        sistemaOn.on(`collect`, r => {
         db.set(`addbot_${message.guild.id}`, 1)
         return message.channel.send(`setado com sucesso!`)
        })

       removeCollect.on(`collect`, r => {
         return message.channel.send(`Ok, mencione um cargo`).then(msg => {
           msg.delete({ timeout: 6000 })
           const filter = b => b.author.id === message.author.id;
           const collector = message.channel.createMessageCollector(filter, {max: 1});

           collector.on('collect', b => {
             let cargoRemove = b.mentions.roles.first();
             if (!cargoRemove) {
               return message.channel.send(`:x: mencione um cargo`)
             } else {
               db.set(`removeCargo_${message.guild.id}`, cargoRemove.id)
               return message.channel.send(`${cargoRemove} setado!`)
             }
           })
         })
       })

       devCollect.on(`collect`, r => {
         return msg.channel.send(`Ok, mencione um cargo`).then(msg => {
           msg.delete({ timeout: 6000 })
           const filter = v => v.author.id === message.author.id;
           const collector = message.channel.createMessageCollector(filter, {max: 1});

           collector.on(`collect`, v => {
            let cargoDev = v.mentions.roles.first();
            if (!cargoDev) {
              return msg.channel.send(`:x: mencione um cargo`)
            } else {
              db.set(`cargoDev_${message.guild.id}`, cargoDev.id)
              return msg.channel.send(`${cargoDev} setado!`)
            }
           })
         })
       })


       aprovadoCollect.on(`collect`, r => {
         return msg.channel.send(`Ok, mencione um cargo`).then(msg => {
           msg.delete({ timeout: 6000 })
           const filter = v => v.author.id === message.author.id;
           const collector = message.channel.createMessageCollector(filter, {max: 1});

           collector.on(`collect`, v => {
            let cargoAprovado = v.mentions.roles.first();
            if (!cargoAprovado) {
              return msg.channel.send(`:x: mencione um cargo`)
            } else {
              db.set(`botAprovado_${message.guild.id}`, cargoAprovado.id)
              return msg.channel.send(`${cargoAprovado} setado!`)
            }
           })
         })
       })

       logsBot.on(`collect`, r => {
         return msg.channel.send(`Ok, mencione um canal.`).then(msg => {
          msg.delete({ timeout: 6000 })
         const filter = m => m.author.id === message.author.id;
         const collector = message.channel.createMessageCollector(filter, { time: 6000 });

         collector.on('collect', m => {
            m.delete().catch(O_o => {});
           let canal = m.mentions.channels.first()
           if (!canal) {
             return message.channel.send(`:x: mencione um canal`).then(msg => {
               msg.delete({ timeout: 6000 })
             })
           } else {
             db.set(`logsBot_${message.guild.id}`, canal.id)
            return msg.channel.send(`Ok, setado o canal de addbot para ${canal}!`).then(msg => {
               msg.delete({ timeout: 6000 })
             })
           }
         })
       })
       })

       testadorCollect.on(`collect`, r => {
         return msg.channel.send(`Ok, mencione um cargo.`).then(msg => {
         const filter = c => c.author.id === message.author.id;
         const collector2 = message.channel.createMessageCollector(filter, {max: 1});

         collector2.on('collect', c => {
            c.delete().catch(O_o => {});
           let cargo = c.mentions.roles.first()
           if (!cargo) {
             return message.channel.send(`:x: mencione um cargo`).then(msg => {
               msg.delete({ timeout: 6000 })
             })
           } else {
             db.set(`roleTestador_${message.guild.id}`, cargo.id)
            return msg.channel.send(`Ok, setei com sucesso o cargo ${cargo}!`).then(msg => {
               msg.delete({ timeout: 6000 })
             })
           }
         })
       })
       })
    })
  } else if (args[0] === "welcome") {
    let welcome = db.get(`welcome_${message.guild.id}`);
    if (welcome === null) welcome = 'deleted-channel';
    let goodbye = db.get(`leave_${message.guild.id}`);
    if (goodbye === null) goodbye = 'deleted-channel';
    let msgWelcome = db.get(`jointxt_${message.guild.id}`);
    if (msgWelcome === null) msgWelcome = 'msg padrao... Sete para mudar';
     let msgLeave = db.get(`leavetxt_${message.guild.id}`);
    if (msgLeave === null) msgLeave = 'msg padrao... Sete para mudar';

    // aliases
    msgWelcome = msgWelcome.replace("{member}", `<@786732667227209759>`)
    msgWelcome = msgWelcome.replace("{member*name}", `storm`)
    msgWelcome = msgWelcome.replace("{member*id}", `786732667227209759`)
    msgWelcome = msgWelcome.replace("{member*tag}", `storm#0014`)
    msgWelcome = msgWelcome.replace("{guild}", `${message.guild}`)
    msgWelcome = msgWelcome.replace("{guild*count}", `${message.guild.memberCount}`)
    msgWelcome = msgWelcome.replace("{guild*id}", `${message.guild.id}`)

  msgLeave = msgLeave.replace("{member}", `<@786732667227209759>`)
    msgLeave = msgLeave.replace("{member*name}", `storm`)
    msgLeave = msgLeave.replace("{member*id}", `786732667227209759`)
    msgLeave = msgLeave.replace("{member*tag}", `storm#0014`)
    msgLeave = msgLeave.replace("{guild}", `${message.guild}`)
    msgLeave = msgLeave.replace("{guild*count}", `${message.guild.memberCount}`)
    msgLeave = msgLeave.replace("{guild*id}", `${message.guild.id}`)
    
    
    let setwelcome = new Discord.MessageEmbed()
    .setColor(config.orange)
    .setTitle(`Welcome & Goodbye - ${message.guild.name}`)
    .addField('Canal de welcome', `<#${welcome}>\nsetar: 👋`, true)
    .addField('Canal de goodbye', `<#${goodbye}>\nsetar: 🚪`, true)
    .setDescription(`**Welcome message:** ${msgWelcome} | setar: ⚜️\n\n**Leave message:** ${msgLeave} | setar: 💠`)
    .setFooter('reaja com o emoji ▶️️️️️️️ para ver as aliases')
    
    return message.channel.send(setwelcome).then(msg => {
      msg.react('👋')
      msg.react('🚪')
      msg.react('⚜️')
      msg.react('💠')
      msg.react('▶️')
      
      const welcomeCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '👋' && user.id == message.author.id)
      
      const goodbyeCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '🚪' && user.id == message.author.id)

       const msgJoinCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '⚜️' && user.id == message.author.id)

       const msgLeaveCollect = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '💠' && user.id == message.author.id)

       const aliases = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '▶️' && user.id == message.author.id)

       aliases.on(`collect`, r => { 
         let aliasesEmbed = new Discord.MessageEmbed()
         .setColor(config.orange)
         .setTitle(`Aliases para join e leave message!`)
         .setDescription("```{member} - menciona o usuario\n{member*name} - nome do usuario\n{member*tag} - tag do usuario\n{member*id}\n{guild} - nome da guild\n{guild*count} - conta quantos membros tem na guild\n{guild*id} - id da guild```")

         msg.edit(aliasesEmbed)
       })

       msgLeaveCollect.on(`collect`, r => {
         return message.channel.send(`Ok, agr fale a mensagem de leave.`).then(msg => {
          const filter = vw => vw.author.id === message.author.id;
          const collectar = message.channel.createMessageCollector(filter, {max: 1});

           collectar.on('collect', vw => {
             let leavetxt = vw.content;
             if (leavetxt.length > 120) {
               return message.channel.send(`:x: Tem que ser menor!`)
             } else {
               db.set(`leavetxt_${message.guild.id}`, leavetxt)
               return message.channel.send(`Ok, setado ${leavetxt} com sucesso!`)
             }
           })
         })
       })

       msgJoinCollect.on(`collect`, r => {
         return message.channel.send(`Ok, agr fale a mensagem de welcome`).then(msg => {
           const filter = vl => vl.author.id === message.author.id;
          const collectar = message.channel.createMessageCollector(filter, {max: 1});

           collectar.on('collect', vl => {
             let txtJoin = vl.content;
             if (txtJoin.length > 120) {
               return message.channel.send(`:x: Muito grande!`)
             } else {
               db.set(`jointxt_${message.guild.id}`, txtJoin);
               return message.channel.send(`${txtJoin} setado!`)
             }
           })
         })
       })

      goodbyeCollect.on(`collect`, r => {
        return message.channel.send(`Ok, mencione um canal`).then(msg => {
          const filter = f => f.author.id === message.author.id;
          const collector = message.channel.createMessageCollector(filter, { time: 6000 });

          collector.on('collect', f => {
            let canal = f.mentions.channels.first()
            if (!canal) {
              return message.channel.send(`:x: mencione um canal`) 
            } else {
              db.set(`leave_${message.guild.id}`, canal.id)
              return message.channel.send(`Setado com sucesso ${canal}`)
            }
          })
        })
      })
      
      welcomeCollect.on('collect', r => {
        return msg.channel.send('Ok, mencione um canal.').then(msg => {
          msg.delete({ timeout: 6000 })
          const filter = w => w.author.id === message.author.id;
          const collector = message.channel.createMessageCollector(filter, { time: 6000 });
          
          collector.on('collect', w => {
            let canal = w.mentions.channels.first()
            if (!canal) {
              return message.channel.send(`:x: mencione um canal `)
            } else {
              db.set(`welcome_${message.guild.id}`, canal.id)
              return message.channel.send(`setado com sucesso o canal ${canal}`)
            }
          })
        })
      })
    })
 
}  else {
    let embed2 = new Discord.MessageEmbed()
  .setTitle(`config - ${message.guild}`)
  .setDescription("bot.\nt!setprefix = setprefix= do bot no seu server                                                \nt!setsugestão crie um canal de sugestão")
    return message.channel.send(embed2)
  }
}