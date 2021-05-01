const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const member = message.mentions.members.first();
  let money = db.fetch(`dinheiro_${message.author.id}`);

  if (!member) return message.channel.send("Mencione o usuário a ser pago.");
  if (message.content.includes("--"))
    return message.channel.send("Não é permitido valores negativos.");
  if (member.id === message.author.id)
    return message.channel.send("Você não pode se pagar.");
  if (money < args[1])
    return message.channel.send("Você não possui o valor dito.");
  if (!args[1]) return message.channel.send("Diga o valor a ser pago.");

  message.channel
    .send(
      `<@${message.author.id}>, você confirma o pagamento do valor ${
        args[1]
      } para o usuário ${member}
      lembrando que esse valor é inrrecuperavel e ao reajir você aceita todos os termos de condiçoes e servirços?`
    )
    .then(msg => {
      msg.react("✅");

      let filtro = (reaction, usuario) =>
        reaction.emoji.name === "✅" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(filtro, { max: 1 });

      coletor.on("collect", cp => {
        msg.delete();
        cp.remove(message.author.id);
        message.channel.send("Pagamento finalizado.");

        db.add(`dinheiro_${member.id}`, args[1]);
        db.subtract(`dinheiro_${message.author.id}`, args[1]);
      });
    });
};
exports.help = {
  name: "pay",
  aliases: ["pagar"]
};
