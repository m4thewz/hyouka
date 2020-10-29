const mongoose = require('mongoose')

const UserSchema = require('../models/user')
const GuildSchema = require('../models/guild')

module.exports = client => {
  //funções para pegar guild/user
  client.getGuild = async guild => {
    let Guild = await GuildSchema.findOne({ guildId: guild.id })
    if (Guild) return Guild
    
    else return;

    
  };
  
  client.updateGuild = async (guild, config) => {
    let Guild = await client.getGuild(guild)

    if (typeof Guild !== "object") Guild = {};
    for (const key in config) {
      if (Guild[key] !== config[key]) Guild[key] = config[key];
      else return;
    }

    
    return await Guild.updateOne(config);
  };
  
  client.createGuild = async settings => {
    let defaults = Object.assign(
      { _id: mongoose.Types.ObjectId() },
      client.config.defaultGuild
    );
    let merged = Object.assign(defaults, settings);

    let newGuild = await new GuildSchema(merged);
    return newGuild
      .save()
  };

  client.deleteGuild = guild => {
    GuildSchema.deleteOne({ guildId: guild.id })
  };

  client.createUser = async profile => {
    let newProfile = await new UserSchema(profile);
    return newProfile.save()
  };

  client.getUser = async user => {
    let data = await UserSchema.findOne({ id: user.id });
    if (data) return data;
    else return;
  };

  client.updateUser = async (user, data) => {
    let profile = await client.getProfile(user);

    for (const key in data) {
      if (profile[key] !== data[key]) profile[key] = data[key];
      else return;
    }

    
    return await profile.updateOne(profile);
  };

  client.deleteUser = async user => {
    UserSchema.deleteOne({ id: user.id })
  };
  
}