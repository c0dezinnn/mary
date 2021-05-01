const Discord = require("discord.js");

 module.exports.run = async(client, message, args) => {
    message.delete();
    if (!args.join(" ")) return message.reply("Digite algo!");
    let search = args.join(' ');

    let result = new URL(`https://www.google.com/search?q=${search}`)
    let resultImg = new URL(`https://www.google.com/search?q=${search}&tbm=isch&ved=2ahUKEwiDnsSkqpftAhUPHLkGHbG5Cu0Q2-cCegQIABAA&oq=${search}&gs_lcp=CgNpbWcQAzoHCCMQ6gIQJzoECCMQJzoECAAQQzoFCAAQsQM6BwgAELEDEEM6AggAOgQIABAeOgYIABAIEB46BAgAEBhQ1nRY56kBYIyrAWgCcAB4AIABnAKIAf0bkgEFMC45LjiYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=mfe6X8PtGo-45OUPsfOq6A4&bih=649&biw=1366&hl=pt-BR`)

    let embed = new Discord.MessageEmbed()
    .setTitle("Google")
    .setDescription(` Pesquisa: ${search}\ngoogle - [**Link**](`+ result +`)\nimg - [**Link**](`+ resultImg +`)`)
    .setFooter(message.author.tag)
    await message.channel.send(embed)
 }

 module.exports.help = {
  name: "google",
  aliases: ['searchgoogle']
}
