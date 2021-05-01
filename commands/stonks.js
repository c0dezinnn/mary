const jimp = require("jimp")

exports.run = async (client, message, args) => {

        let img = jimp.read("https://cdn.discordapp.com/attachments/812771566508441620/832277962292330526/stonks-meme.png")
        if (!args[0]) return message.reply("Indique a fala.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "stonks.png"}]})
                })
            })
        })
    }