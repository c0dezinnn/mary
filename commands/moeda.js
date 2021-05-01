
exports.run = async (bot, message, args) => {

    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0) {
      message.channel.send('coroa!');
    }
    else {
      message.channel.send('Cara!');
    }
}
  