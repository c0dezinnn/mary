const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];
  if(isNaN(Timer)) return message.reply("Coloca um Tempo, Ou **não**?")
  if (ms(Timer) > 2147483647) return message.reply("Você Não vai esperar tanto tempo por um temporizador! Agora para de ser burro e coloca um tempo certo.")
  if(ms(Timer) < 1) return message.reply("Qual o sentido disso? é um numeor??")

  if(!args[0]){
    return message.channel.send(":x: " + "| Digite um um numero seguido por > \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Coloque o tempo  \"Segundos or minutos  horas\"");
  }

  message.channel.send(":white_check_mark: " + "| Temporizador iniciado: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` O tempo Foi finalizado!, Tempo durou: ${ms(ms(Timer), {long: true})}`)
  }, ms(Timer));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'timer',
    description: 'Create a timer.',
    usage: 'timer'
  };