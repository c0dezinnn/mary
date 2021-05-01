const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Track a country or worldwide COVID-19 cases",

    async run (client, message, args){
let check = "<:check:778044928914751549>";
let inf = "<:infom:778311038407278604>";
let erru = "<:aviso:778311007616499803>";
let erado = `<:xmark:778044969297379328>`;

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle(`${erru} | Você errou o pais ou errou o nome dele`)
        .setColor(0xFF0000)
        .setDescription(`${inf} Você não pode colocar o nome brasilerio, **EXEPLO**( >!corona brazil))`)
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`🌎 Status do mundo todo`)
                .addField(`${check} Casos confirmados`, confirmed)
                .addField('⛑️ Recuperados', recovered)
                .addField('☠️ Mortes', deaths)
                .setThumbnail(`https://media1.giphy.com/media/YPbrUhP9Ryhgi2psz3/giphy.gif`)
                .setColor("RANDOM")
                .setTimestamp()

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setThumbnail(`https://media1.giphy.com/media/YPbrUhP9Ryhgi2psz3/giphy.gif`)
                .setTitle(`${inf} Status do covid **${countries}**`)
                .addField(`${check} Casos confirmados`, confirmed)
                .addField('⛑️ recuperados', recovered)
                .addField('☠️ mortes', deaths)
                .setColor("RANDOM")
                .setTimestamp()
                

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Pais invalido ou inexistente, tente colocar o nome dele em ingles ex >!corona Brazil')
            })
        }
    }
}