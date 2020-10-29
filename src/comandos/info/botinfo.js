const Discord = require('discord.js')
const os = require('os')
const osu = require('node-os-utils')
module.exports = {
    name: 'botinfo',
    usage: 'botinfo',
    aliases: ['info'],
    category: 'Info',
    description: 'Mostra todas minhas informações',
    run: async (client, message, args, db) => {
    
    let cpu = process.cpuUsage()
    let cpuU = cpu.user.toString()[0] + cpu.user.toString()[1]
    let cpuS = cpu.system.toString()[0] + cpu.system.toString()[1]
    cpu = cpuU / 100 * cpuS
    let avatar = client.user.displayAvatarURL();
    let date = client.user.createdAt;
    let servsize = client.guilds.cache.size;
    let usersize = client.users.cache.size;
   
  
    const embed = new Discord.MessageEmbed()
      .setColor(0x03ffea)
      .setThumbnail(avatar)
      .setTitle(`<a:Robot:764917364210794526> ${client.user.tag}`)
      .setDescription(`Tag: **${client.user.tag}**\nApelido: **${message.guild.me.nickname ? message.guild.me.nickname : 'Não possuo apelido nesse servidor'}**\nId: **${client.user.id}**\n\n<:emoji_23:764564572786786325> Dono: **Matheuuus#7083** `)
      .addField('Informações Discord', `
        <:servers:765018069038530570> **Servidores:** ${servsize}
        <:emoji_18:764564237904773120> **Usuários:** ${usersize}
        <:hashtag:765016609185202177> **Canais**: ${client.channels.cache.size}`, true)
        .addField('Servidor', `
        <:terminal:765225432911708160> **Comandos: **${client.commands.size}
        :pencil: **Prefixo nesse servidor: ** ${db.guild.prefix}
        `, true)
        .addField('Tecnlogias Usadas', `
        <:download:765015707322548234> **Linguagem PrincipaL:** JavaScript
        <:node:765015707187544115> **Runtime:** Node.js
        <:discordjs:765015707058307084> **Livraria Principal:** Discord.js
        <:host:765015707372224543> **Hospedagem:** Glitch
        <:Database:765015707381268510> **Banco de Dados:** MongoDB
      `, true)
      .addField('Links', `
      <:invite:765228062580801546> [Me adicione](https://discord.com/api/oauth2/authorize?client_id=542665568788938752&permissions=8&redirect_uri=http%3A%2F%2Fhyouka-web.glitch.me%2Fauth%2Fdiscord%2Fredirect&scope=bot)
      <:web:765228061901717554> [Meu Website](https://hyouka-web.glitch.me)
      `)
      
      .addField('Modelo da cpu: ', os.cpus()[0].model.split(' @')[0])
      .addField('Uso de cpu: ', `**${cpu}%**`, true)
      .addField('Memória utilizada: ', `**${parseInt(process.memoryUsage().rss/1024/1024)}Mb**`, true)
      .addField('Latência: ', `**${Math.round(client.ws.ping)}ms**`, true)
      .setFooter(`${client.user.tag}`, avatar)
      .setTimestamp();

    

    message.channel.send(embed);
  }
}