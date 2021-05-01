const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
      
let start = Date.now();
message.channel.send({embed: {description: "Pingando...", color: "RANDOM"}}).then(m => {

      //cpu
     function cpuAverage() {
    let totalIdle = 0, totalTick = 0;
    let cpus = os.cpus();
    for(let i = 0, len = cpus.length; i < len; i++) {
      let cpu = cpus[i];
      for(type in cpu.times) {
        totalTick += cpu.times[type];
     }     
      totalIdle += cpu.times.idle;
    }
    return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
  }
  let startMeasure = cpuAverage();
  setTimeout(function() { 
    let endMeasure = cpuAverage(); 
    let idleDifference = endMeasure.idle - startMeasure.idle;
    let totalDifference = endMeasure.total - startMeasure.total;
    let percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);  
    let arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = os.freemem() / 1024 / 1024;
    const total = os.totalmem() / 1024 / 1024 ;
    const usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
    const getpercentage = 
  ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
    const realMemory = total - used
//cpu




let ping = Math.round(client.ws.ping)

let end = Date.now();
let msg =  end - start 
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('ℹ️ Minhas informaçoões')
            .setColor('RANDOM')
            .addFields(
              {
                    name: '🗯️ linguagem',
                    value: `javascript e um poquin de kotlin`,
                    inline: true
                },
                {
                    name: '👑 Dono',
                    value: `<@700157765053841438>`,
                    inline: true
                },
                {
                    name: '🌐 Servidores',
                    value: `Servindo ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Canais',
                    value: `Servindo ${client.channels.cache.size} canais.`,
                    inline: true
                },
                {
                    name: '👥 Total de usuarios',
                    value: `Servindo ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: 'minha data de criação',
                    value: `19/10/2020`,
                    inline: true
                },
                
                {
                    name: '⏳ Ping',
                    value: `Latencia da API **${ping}** MS\nLatencia da menssagem **${msg}** MS`,
                    inline: true
                },
                {
                    name: '📅 Data de entrada',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: '💻 Uso do processador',
                    value: `Usado: ${percentageCPU}%\nNúcleos: ${os.cpus().length} núcleos`,
                    inline: true
                },
                {
                    name: '💻 Uso da memoria ram.',
                    value: `Total: ${Math.round(total * 100) /100} MB \nUsada: ${Math.round(realMemory * 100) / 100} MB (${getpercentage})`,
                    inline: true
                },
                
            )
            .setFooter(`comando executado por : ${message.author.tag}`, message.author.displayAvatarURL())

        m.edit(embed).catch(e => message.channel.send(e))
  }, 100);
})
    }
}