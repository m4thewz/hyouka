const Discord = require('discord.js')
module.exports = {
    name: 'prefix',
    usage: 'prefix <prefixo>',
    aliases: ['prefixo', 'setprefix'],
    category: 'Configuração',
    description: 'Altera o prefixo do seu servidor para um novo',
    exemple: 'prefix h-',
    run: async (client, message, args, db) => {
        //message.channel.send(`Meu prefixo é ${guildConfig.get('prefix')}`)
        if(!message.member.hasPermission('MANAGE_GUILD')  || message.author.id !== "474206298645331970") {
            client.errorEmbed(`<@${message.author.id}> Você é fraco, lhe falta **Gerenciar Servidor**`)
        }
        else{
            if(!args[0]){
                client.simpleEmbed(`Olá <@${message.author.id}>, meu prefixo atual nesse servidor é **${db.guild.prefix}**\nPara alterar esse prefixo utilize \`${db.guild.prefix}prefix [novo prefixo]\``)
            }
            else {
                const prefixo = args[0]
                const newPrefix = await db.guildSchema.findOneAndUpdate({guildId: message.guild.id }, { $set: {prefix: prefixo} }, {new: true} )
                message.channel.send(`Prefixo alterado para ${newPrefix.prefix}`)
            }
        }
    }
}