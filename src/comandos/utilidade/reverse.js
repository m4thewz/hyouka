const Discord = require('discord.js')
const moment = require('moment')
module.exports = {
    name: 'reverse',
    usage: 'reverse <palavra> ',
    aliases: ['reverso'],
    category: 'Utilidade',
    example: 'reverse subi no onibus',
    description: 'Pega uma palavra e a reverte',
    run: async (client, message, args, db) => {
      if(!args[0] || args[0] < 2) {
        client.errorEmbed('Insira uma palavra valida!')
      }
      else{
        client.simpleEmbed(`:pencil: | **${args.join(" ").split("").reverse().join("")}**`)
      }
    }
}