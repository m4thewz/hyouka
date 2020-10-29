const mongoose = require('mongoose')

const GuildConfig = new mongoose.Schema({
    guildId: {
        type: String,
        unique: true,
        required: true
    },
    guildName: String,
  
    ownerName: String,
    ownerId: String,
  
    prefix: {
        type: String,
        required: true,
        default: "h."
    },
  
    config: {
      deleteMessage: Boolean,
      notCmdChannels: Array,
      autoMod: Boolean,
      setDj: Boolean,
      setMod: Boolean,
      autoRole: {
        enabled: Boolean,
        roles: Array
      },
      welcomeMessage: {
        enabled: Boolean,
        embed: {
          enabled: Boolean,
          title:  String,
          description: String,
          footer:{
            enabled: Boolean,
            footerImage: String,
            footerMessage: String
          },
          thumbnail: {
            enabled: Boolean,
            image: String
          },
          author: {
            enabled: Boolean,
            authorImage: String,
            authorMessage: String
          },
          image: {
            enabled: Boolean,
            image: String
          }
        },
        channel: String,
        message: String,
        messageEnabled: Boolean
      },
      leaveMessage: {
        enabled: Boolean,
        embed: {
          enabled: Boolean,
          title:  String,
          description: String,
          footer:{
            enabled: Boolean,
            footerImage: String,
            footerMessage: String
          },
          thumbnail: {
            enabled: Boolean,
            image: String
          },
          author: {
            enabled: Boolean,
            authorImage: String,
            authorMessage: String
          },
          image: {
            enabled: Boolean,
            image: String
          }
        },
        channel: String,
        message: String,        
        messageEnabled: Boolean

      },
      antiIvite: {
        enabled: Boolean,
        allowedChannel: Array,
        allowedGuilds: Array,
        deleteInvite: Boolean,
        sendMessage: Boolean
      },
      starboard: {
        enabled: Boolean,
        starChannel: String,
        minStars: String,
        blockedChannel: Array
      },
      moderation: {
        enabled: Boolean,
        sendMessage: Boolean,
        punishMessage: String,
        autoMod: {
          enabled: Boolean,
          actions: {
            type: Map,
            of: String
          }
        }
      },
    },
    
     role: {
       modRole: String,
       adminRole: String,
       mutedRole: {
       enabled: Boolean,
         roleID: String
       }
    },
     channel: {
        punishChannel: {
            enabled: Boolean,
            channelID: String
        },
        logsChannel: {
            enabled: Boolean,
            channelID: String
        },
        commandChannel: {
            enabled: Boolean,
            channelID: String
        }
     }
})

module.exports = mongoose.model('GuildConfig', GuildConfig)