module.exports = {
    name: "ping",
    category: "Info",
    usage: 'ping',
    aliases: ['latencia'],
    description: "Retorna a latencia do bot",
    run: async (client, message) => {
       message.channel.send(`Pong - ${client.ws.ping}ms `)
    }
}
//${msg.createdTimestamp - message.createdTimestamp}ms