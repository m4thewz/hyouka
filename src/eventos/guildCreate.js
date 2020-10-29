module.exports.run = async (client, guild) => {
  
  let guildDb = await client.getGuild(guild)
  
  if(!guildDb){ //Fiz essa verificação porque as vezes o bot ja esteve na guild mas saiu, ai vai bugar se ter duas guilds com 2 id igual(no schema coloquei id como unique)

      const newGuild = await client.createGuild({
        guildId: guild.id,
        guildName: guild.name,

        ownerName: guild.owner.user.username,
        ownerId: guild.owner.id,
      })
  }
}
