 //O evento é para ser colocado no event de message
            //Aqui ele pega o servidor
            var guild = message.guild;
            //Usuarios do server
            if (guild.memberCount >= 250) guild = guild.fetchMembers();
            //Aqui ele vai criar a embed
            let embeddiretor = new Discord.RichEmbed()
                //Titulo dela
                .setTitle(`Log de comandos!`)
                //Aqui seria o icone do servidor que usaram o comando
                .setThumbnail(message.guild.iconURL)
                //Você pode mudar a descrição e a Field!
                .setDescription(`Executaram o comando **${command}**, no servidor **${message.guild.name}**`)
                .addField(`Dados do servidor:`, `Membros: ${message.guild.memberCount} \n Nome: ${message.guild.name} \n Owner ID: ${message.guild.owner.id} \n Criada em: ${moment(guild.createdAt).format("LL")}`)
                //Aqui você coloca o seu id, ou o de outra pessoa
                client.fetchUser("700157765053841438", false).then(user => {
                    
                user.send(embeddiretor)
            })
            