
const mongoose = require('mongoose')
const {MessageEmbed} = require('discord.js')

const UserSchema = require('../models/user')
const GuildSchema = require('../models/guild')

const {verificaSemelhanca} = require('../utils/dife.js')

module.exports.run = async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    
    const db = mongoose
    db.guild = await client.getGuild(message.guild)
    db.user = await client.getUser(message.author)
    db.guildSchema = GuildSchema
    db.userSchema = UserSchema
  
  
  if(!db.guild) {//se o servidor não estiver registrado ele registra
      const newGuild = await client.createGuild({
        guildId: message.guild.id,
        guildName: message.guild.name,

        ownerName: message.guild.owner.user.username,
        ownerId: message.guild.owner.id,
          
      }).then(async () => {
        let msg = await message.channel.send('Desculpe estava registrando seu servidor no meu banco de dados, tente novamente')
        msg.delete({timeout: 3000})
      
      })
    }
    else if(!db.user) {//ou se o user não estiver registrado ele registra
      const newProfile = await client.createUser({
        id: message.author.id
      }).then(async () => {
        let msg = await message.channel.send('Desculpe estava registrando você no meu banco de dados, tente novamente')
        msg.delete({timeout: 3000})
      })
    }
    
    else {
      
      
      
      const prefix = db.guild.get('prefix')

      if (!message.content.startsWith(prefix)) return;

      if (!message.member) message.member = await message.guild.fetchMember(message);

      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();

      if (cmd.length === 0) return;
      
      const array = client.commands.map(x => x.aliases.concat([x.name]))//pega todos os comandos(aliases tambem)
      let concated = []
      for (let i = 0; i < array.length; i++) {//loop no array
        concated = concated.concat(array[i].concat(array[i + 1]))
      }

      require('../utils/embeds')(client, message) //pega todas as embeds
      
      let command = client.commands.get(cmd);//pega o comando da collection commands
      if (!command) command = client.commands.get(client.aliases.get(cmd));//se não encontrar ele pega o comando pelo aliase
      if(!command) {
        client.errorEmbed(`Desculpe, mas eu não consegui encontrar esse comando${!verificaSemelhanca(cmd, concated) ? '' : `\nJa tentou usar \`${prefix}${verificaSemelhanca(cmd, concated)}\`?`}`) //se ele não encontrar o comando ele manda msg de erro
      }
      if (command) {
          command.run(client, message, args, db); //executa o comando
      }
    }
}