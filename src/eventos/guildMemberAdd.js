const Discord = require("discord.js");


exports.run = async (client, member) => {
 
    let server = await client.getGuild(member.guild);
    let config = server.config.welcomeMessage; //pega a config do servidor
    if (config.enabled) { //se tiver ativada
      if (config.embed.enabled && config.embed.description) { //Se tiver ativada a embed, e tiver uma description
        let items = config.embed;
        let embed = new Discord.MessageEmbed()
          .setDescription(items.description)
          .setTimestamp();
        items.title ? 
          embed.setTitle(items.title) 
          : ""; //Se tiver um titulo coloca na embed
        items.footer.enabled
          ? embed.setFooter(items.footerMessage, items.footerImage)
          : "";//Se tiver footer ele coloca
        items.thumbnail.enabled
          ? embed.setThumbnail(items.thumbnail.image)
          : "";//se tiver thumbnail ele coloca
        items.image.enabled ? embed.setImage(items.image) : ""; //se tiver image ele coloca
        items.author.enabled
          ? embed.setAuthor(
              items.author.authorMessage,
              items.author.authorImage
            )
          : "";//se tiver author ele coloca
        let channel = await member.guild.channels.cache.get(config.channel);//pega o canal configurado
        if (channel) return channel.send(embed);//se ele encontrar o canal manda a embed
      } else {//Se não tiver embed, ele so manda a mensagem
        if (config.message) {
          let channel = await member.guild.channels.cache.get(config.channel);
          if (channel) return channel.send(config.message);
        }
      }
    }
  
   let user = await client.getUser(member.user);

    if (!user) {
      await client.createUser({
        id: member.idiminator,
        discordTag: member.tag,
        username: member.username
      });
    }
};
