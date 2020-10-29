const Discord = require('discord.js')
module.exports = {
    name: "eval",
    category: "Owner",
    usage: 'eval',
    aliases: ['execute'],
    description: "Comando privado",
    run: async (client, message, args, db) => {
      if (message.author.id == "474206298645331970") {
    try {
        if(!args.join(' ')) return message.channel.send(`<@${message.author.id}> Insira algo para ser executado!`)
        let code = eval(args.join(" "))
        
        if (typeof code !== 'string') code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.MessageEmbed()
        .setDescription('Eval')
        .addField('Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
        .addField('Saída', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}
else{
    message.channel.send("So meu papai pode executar esse comando")
}
    }
}