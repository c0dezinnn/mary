const Discord = require("discord.js");
var name = "qr";
module.exports = {
  name: "qr",
  description: "generates a qr code",
  category: "general",
  usage: "qr",
  async run(client, message, args) {
    let text = args.slice(0).join(" ");
    if (args.length < 2) {
      message.channel.send(
        "Você deve adicionar texto ao seu comando, para que eu possa convertê-lo em um código QR, deve haver uma quantidade boa de palavras.\nEX: `>!gerarqr Essa menssagem é apenas um teste.` "
      );
    } else {
      var user_text = text.replace(/ /g,"%20");;

      var qr_generator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_text}`;
      console.log(qr_generator)
      const embed = new Discord.MessageEmbed()
      .setTitle("QR Code")
      .setColor("#3440eb")
      .setDescription("Aqui estar o seu QR code!")
      .setImage(qr_generator+".png")
      message.channel.send(embed);
    }
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
};