const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
 'https://images-ext-2.discordapp.net/external/SeoTCRfJ_Gstc4Xl2LNktjQ92VBqXwknxOUzMVjkgWc/https/loritta.website/assets/img/actions/headpat/generic/gif_8.gif',
 'https://images-ext-2.discordapp.net/external/W9mbkGjC_ZSjea117LdmV4GUmRDxmRNsMpeVdnaFDZM/https/loritta.website/assets/img/actions/headpat/generic/gif_12.gif',
 'https://images-ext-1.discordapp.net/external/kaeMB9DAgYCr6mc5KGs7TVVs6dTwdWu5FPLuHt7WQU8/https/loritta.website/assets/img/actions/headpat/generic/gif_10.gif',
 'https://images-ext-2.discordapp.net/external/ZYX9UE8pROfkTCqvV9lkzGgLX54E4N35xXhaVPHD9pc/https/loritta.website/assets/img/actions/headpat/generic/gif_4.gif',
 'https://images-ext-1.discordapp.net/external/2SpMrIXsJaLYxh0J0PETVsYt4hccatiUDra0KPw4M8s/https/loritta.website/assets/img/actions/headpat/generic/gif_2.gif?width=500&height=281',
 'https://images-ext-2.discordapp.net/external/oPOfuzPgGP6972fTatlHW_0dEZwosyrbP7pNnujL-GE/https/loritta.website/assets/img/actions/headpat/generic/gif_5.gif',
 'https://images-ext-1.discordapp.net/external/K-Tw3OZ0tQTftxPG3NK1wqHJu_RNA9ImWnaJ57Zs_UQ/https/loritta.website/assets/img/actions/headpat/generic/gif_6.gif',
 'https://images-ext-2.discordapp.net/external/zIf6UDBfeza4-wPx2Gxtr-5hzJcUW5T6EQT7ShUbBGc/https/loritta.website/assets/img/actions/headpat/generic/gif_13.gif',
 'https://images-ext-1.discordapp.net/external/4lBWcynN8x6rHUc6x8x-47aDOsMwnfhI7rnC7uQ1rTw/https/loritta.website/assets/img/actions/headpat/generic/gif_11.gif',
 'https://images-ext-2.discordapp.net/external/H0yIk2X6dDpv9jHhjD9Zm5ytB0V79t5vBRBcox4rU3A/https/loritta.website/assets/img/actions/headpat/generic/gif_3.gif',
 'https://images-ext-2.discordapp.net/external/K2lbAHKo3uelamjwZ3gATrbz0SwbOwsL7AGh9TceQyk/https/loritta.website/assets/img/actions/headpat/generic/gif_1.gif',
 'https://images-ext-2.discordapp.net/external/ZDDqp7LNjU02VRmWyigcmXg1BOFD4VAJ_bzckTl4hm8/https/loritta.website/assets/img/actions/headpat/generic/gif_0.gif',
 'https://images-ext-2.discordapp.net/external/F7BURQFtgSsH-H7Flgy0AySMxaRD7tv3b4yyoAfEqxY/https/loritta.website/assets/img/actions/headpat/generic/gif_9.gif?width=500&height=352',
 'https://media.tenor.com/images/bd5a9fa136c752ff0886cae694c3d7ef/tenor.gif',
 'https://i.imgur.com/O5sDPN6.gif',
 'https://25.media.tumblr.com/3ade742e12f149eb3cb80ce670755d95/tumblr_mkhvs1dOvH1r80kn7o1_500.gif',
 'https://pa1.narvii.com/6200/33889bd8c5e3b9dde6b4c43de225fea521ce511a_hq.gif',
 'https://media.tenor.com/images/c5acf899741117647a56c80ad6f459ca/tenor.gif',
 'https://i.pinimg.com/originals/29/ad/a3/29ada368b8fec8b8959b7fbf84d549aa.gif',
 'https://pa1.narvii.com/6319/ac3997fdcc9d97ec4cf4f986885cde230150cd03_hq.gif'
 ];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você precisa mencionar um usuário para fazer cafuné!');
}
/*
message.channel.send(`${message.author.username} **Deu um tapa em* ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Cafuné')
        .setColor('#000000')
        .setDescription(`${message.author} Fez um cafuné em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Use m!cafuné para fazer cafuné em alguém!')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}