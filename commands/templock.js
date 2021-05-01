const ms = require('ms');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
  if (!time) return message.reply('Coloque o tempo que o chat vai ficar trancado');

  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Damnn, **${message.author.username}** Canal foi trancado por  ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('O canal foi destrancado pode conversar:wink:')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tld'],
  permLevel: 2
};

exports.help = {
  name: 'timedlockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'timedlockdown <duration>'
};