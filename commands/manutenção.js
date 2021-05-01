 const db = require('quick.db') //fazer conexão com a quick.db
module.exports = {
    name: 'manutenção',
    description: 'bloqueia o bot',
    category: "info",
    run: (client, message, args) => {
if(!message.author.id === '700157765053841438') return; //caso quem executou a mensagem não tenha seu id, o bot simplesmente vai ignorar

if(args[0] === 'ativar') { //caso seja passado o argumento de ativar a manutenção, tudo dentro do {} irá entrar em ação.

 
 db.set('manutencao', true) //aqui, definimos que está ativa com boolean

 message.channel.send(`Manutenção ativada com sucesso!`) //aqui enviaremos a mensagem de confirmação

}

if(args[0] === 'desativar') { //caso seja passado o argumento 'desativar' tudo que está dentro do {} vai ser executado

    db.set('manutencao', false) //novamente utilizamos boolean para definir, só que dessa vez que está desativada

}