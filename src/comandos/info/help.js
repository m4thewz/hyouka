const Discord = require('discord.js')
module.exports = {
    name: "help",
    category: "Info",
    usage: 'help [comando]',
    aliases: ['ajuda', 'comandos'],
    example: 'help ping',
    description: "Retorna a descrição, modo de uso dos comandos, caso não especifique um comando retorna as lista de todos comandos",
    run: async (client, message, args, db) => {
  
      if(!args[0]) {
            let categorias = [...new Set(client.commands.filter(x => x.category !== 'Owner').map(x => x.category))] //Cria um novo set com todas as nossas categorias(definida no module.exports dos comandos)
            //Para saber mais sobre Set, acesse https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set
            
            let embed = new Discord.MessageEmbed()
              .setTitle('Painel do Hyouka')
              .setDescription(`Olá <@${message.author.id}> seja bem vindo ao meu painel de ajuda!\n\nAtualmente eu tenho **${client.commands.size}** comandos`)
              .setTimestamp()
              .setThumbnail(client.user.avatarURL())
              .setFooter(`Executado por ${message.author.username}`, message.author.displayAvatarURL);
              
        
            const emojis = client.guilds.cache.get('697775288670748672') //Servidor que tenho uns emojis

            categorias.forEach((categoria) => {
              
              let comandos = client.commands.filter(x => x.category == categoria).map(x => x)
              let categoriaEmoji = categoria.replace('ã', 'a').replace('ç', 'c')
              let emoji = emojis.emojis.cache.find(e => e.name == `${categoriaEmoji}Emoji`) //Aqui busco por um emoji com o nome da categoria + emoji, ex: InfoEmoji
              //<:${emoji.name}:${emoji.id}>
              emoji = `<${emoji.animated ? 'a:' : ':'}${emoji.name}:${emoji.id}>`
              embed.addField(`${emoji} ${categoria}[${comandos.length}]`, `Exemplo de comando: **${comandos[Math.floor(Math.random() * comandos.length)].name}**`)
            })
        
            let msg = await message.channel.send(embed)
              
            msg.react('764917364210794526') //Rege com um emoji
            
            let homefilter = (r, u) => r.emoji.id === '764917364210794526' && u.id === message.author.id //Cria um filtro pro collector
            let homecolect = msg.createReactionCollector(homefilter, { time: 60000 });//Cria um collector para o collecotr inicial
            
            homecolect.on("collect", async => {
              msg.edit(embed)
            })
        
            categorias.forEach((categoria) => {
              let categoriaEmoji = categoria.replace('ã', 'a').replace('ç', 'c')

              let emoji = emojis.emojis.cache.find(e => e.name == `${categoriaEmoji}Emoji`) //Mesma coisa que em cima
              msg.react(emoji.id).then(() => {})//O bot reage com o emoji da categoria
              let filter = (r, u) => emoji.animated ? r.emoji.id === emoji.id && u.id === message.author.id : r.emoji.name === emoji.name && u.id === message.author.id ; //Cria um filtro pro collector
              let colect = msg.createReactionCollector(filter, { time: 60000 });//Cria um collector
              
              colect.on("collect", async => { //Quando o autor da msg reagir eu disparo esse evento 
              
                let commands = client.commands.filter(x => x.category == categoria).map(x => x)
                
                let embedEdit = new Discord.MessageEmbed()
                  .setTitle(`${categoria} - Painel de comandos`)
                  .setDescription(`Aqui estão todos meus comandos da categoria **${categoria}**`)
                  .setThumbnail(client.user.avatarURL())
                  .setTimestamp()
                  .setFooter(`Executado por ${message.author.username}`, message.author.displayAvatarURL);

                  commands.forEach((command) => {
                    let aliases = command.aliases ? `(${command.aliases.join(', ')})` : ''
                    embedEdit.addField(`${db.guild.prefix}${command.name} ${aliases}`, `${command.description}\nExemplo: \`${db.guild.prefix}${command.usage}\` `)
                  })
                  msg.edit(embedEdit)
                
              })
            })
        }
      
        let cmd = client.aliases.get(args[0])
        if(!cmd) {
            cmd = args[0]
        }
        
        
        
        else if(!client.commands.get(cmd)) {
            client.errorEmbed(`» Desculpe mas não foi possivel encontrar o comando **${args}**`)
        }
        
        else {
            let title = cmd
            title = title.slice(0,1).toUpperCase() + title.slice(1)
            let embed = new Discord.MessageEmbed()
                .setTitle(title + " - Central de Comandos!")
                .setDescription(`${client.commands.get(cmd).description}\n**Modo de uso:** \`${db.guild.prefix}${client.commands.get(cmd).usage}\``)
                .setColor(0x2F3136)
                .setFooter(`Executado por ${message.author.username}`)
                .setTimestamp()
                
            if(client.commands.get(cmd).aliases){
                embed.addField('**Sinônimos:**', client.commands.get(cmd).aliases)
                message.channel.send(embed)
            }
            else{
                message.channel.send(embed)

            } 
        }
    }
}