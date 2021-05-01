const discord = require("discord.js")

module.exports = {
    name: 'ping',
    description: 'Ping',
    category: "info",
    run: (client, message, args) => {
 let start = Date.now();
  
  message.channel.send({embed: {description: "Pegando MS...", color: "RANDOM"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("<a:maryping:830541627780366377> Ping!", message.author.avatarURL())
    .addField("Latencia da API", Math.round(client.ws.ping) + "ms", true)
    .addField("Latencia da Menssagem", end - start + "ms", true)
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e))
    
  })
    }
}