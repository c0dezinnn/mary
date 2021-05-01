const Discord = require('discord.js')

  exports.run = async (bot,message,args)=>{
    

    
    let channel = message.mentions.channels.first()
    if (!channel) return message.channel.send(`:warning: | ${message.author} **Mencione um canal para enviar a embed.**`) 
    let ldis = `<a:Discord:749753525629747424>`
    let fix = `<a:fix:728869336651137064>`
    let din = `<a:DinheiroVoando:729095803175698462>`
    let card = `<a:Carto:749759998837522493>`

   
    message.delete()
   
    message.channel.send(`${message.author}, <:aviso:728869647662710826> | siga as instruções.`).then(msg => {
    msg.delete({ timeout: 30000 })
    })


    const embed1 = new Discord.MessageEmbed()
    .setAuthor(`📌 | Adicione o Author!`)
    .setTitle(`Titulo`)
    .setDescription(`Descrição`)
    .setColor('#e6e6e6')
    .setFooter('Footer')
   message.channel.send(embed1).then(msg => {
    msg.delete({ timeout: 30000 })
    })


    var main = message.channel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

		main.on('collect', a => {
            let auth = a.content //auth
           
			const embed2 = new Discord.MessageEmbed()
              .setAuthor(`${auth}`)
              .setTitle(`${fix} | Adicone um titulo!`)
              .setDescription(`Descrição!`)
              .setColor('#e6e6e6')
              .setFooter('Footer')
              .setTimestamp()

            message.channel.send(embed2).then(msg => {
    msg.delete({ timeout: 30000 })
    })

        var prg2 = message.channel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })
    
        prg2.on('collect', b => {
            let Titulo = b.content //titulo
            
            const embed3 = new Discord.MessageEmbed()
            .setAuthor(`${auth}`)
            .setTitle(`${Titulo}`)
              .setDescription(`${fix} | Adicone Uma descrição!`)
              .setColor('#e6e6e6')
              .setFooter('Footer')
              .setTimestamp()
            message.channel.send(embed3).then(msg => {
    msg.delete({ timeout: 30000 })
    })


            var prg3 = message.channel.createMessageCollector(c => c.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            });
            prg3.on('collect', c => {
                let descrição = c.content    //footer

                const embed4 = new Discord.MessageEmbed()
                .setAuthor(`${auth}`)
            .setTitle(`${Titulo}`)
              .setDescription(`${descrição}`)
              .setColor('#e6e6e6')
              .setFooter('📌 | Adicone UM Footer!!!!')
              .setTimestamp()
                message.channel.send(embed4).then(msg => {
    msg.delete({ timeout: 30000 })
    })
                var prg4 = message.channel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                });
                prg4.on('collect', d => {
                    let footer = d.content //descrição

                const embed4 = new Discord.MessageEmbed()
              .setTitle(`${Titulo}`)
              .setDescription(`${descrição}`)
              .setColor("RANDOM")
              .setAuthor(`${auth}`)
              .setFooter(`${footer}・ `)
            .setTimestamp()


             channel.send(embed4)
             
             
message.channel.send("<a:emoji_2:728869458407587881> | Embed concluida").then(msg => {
    msg.delete({ timeout: 30000 })
    })

                       
                    })
                })
            })
    })  
                }




