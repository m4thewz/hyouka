const Discord = require('discord.js')
module.exports = {
    name: "kibe",
    category: "Owner",
    usage: 'eval',
    aliases: ['kibar'],
    description: "Comando privado",
    run: async (client, message, args, db) => {
      if (message.author.id == "474206298645331970") {
      let kibes = client.guilds.cache.get('425864977996578816').emojis.cache.map(x => x)
      for(let x = 0; x < kibes.length; x++) {
          let kibe = kibes[x]
          let url = `https://cdn.discordapp.com/emojis/${kibe.id}.${kibe.animated ? 'gif' : 'png' }`
          let branco = "701989711543140352"
          message.channel.send(url)
          if(x == 60) break;  
          
        }
    }
    else{
        message.channel.send("So meu papai pode executar esse comando")
    }
    }
}