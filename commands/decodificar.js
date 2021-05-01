const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "decode",
    category: "extra",
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Ocorreu um erro, tente novamente!`)
        }

        const embed = new MessageEmbed()
            .setTitle('👱 Decodificar binário')
            .setDescription(data.text)
            .setFooter("Decodificado...")

        await message.channel.send(embed)
    }
}