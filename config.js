module.exports = {
  defaultGuild: {
     config: {
            deleteMessage: false,
            setAdmin: false,
            setMod: false,
            setDJ: false,
            autoRole: { 
                enabled: false
            },
            welcomeMessage: {
                  enabled: false,
                  embed: {
                      enabled: false,
                      title:  '',
                      description: '',
                      footer:{
                        enabled: false,
                        footerImage: '{user.avatar}',
                        footerMessage: '{user.tag}'
                      },
                      thumbnail: {
                        enabled: false,
                        image: '{user.avatar}'
                      },
                      author: {
                        enabled: false,
                        authorImage: '{user.avatar}',
                        authorMessage: '{user.tag}'
                      },
                      image: {
                        enabled: false,
                        image: '{user.avatar}'
                      }
                    },
                    message: 'Bem-vindo {user.name} à {server}!',
                    messageEnabled: false,
                    channel: '123'
                },
            leaveMessage: {
                    enabled: false,
                    embed: {
                      enabled: false,
                      title:  'Até mais',
                      description: '{user.name} saiu do servidor',
                      footer:{
                        enabled: false,
                        footerImage: '{user.avatar}',
                        footerMessage: '{user.tag}'
                      },
                      thumbnail: {
                        enabled: false,
                        image: '{user.avatar}'
                      },
                      author: {
                        enabled: false,
                        authorImage: '{user.avatar}',
                        authorMessage: '{user.tag}'
                      },
                      image: {
                        enabled: false,
                        image: '{user.avatar}'
                      }
                    },
                    message: 'Tchau {user.name}',
                    messageEnabled: false,
                    channel: '123'

                },
            antiInvite: {
                enabled: false,
                allowGuildInvites: false,
                deleteInvite: false,
                sendMessage: false,
                blockMessage: '{user.name} você não pode enviar convites aqui!'
            },
            starBoard: {
                enabled: false,
                minStars: '3'
            },
            moderation: {
                enabled: false,
                sendMessage: false,
                punishMessage: '**Usuário punido:** {user.name}\n**Punido por** {@staff}\n**Motivo:** {reason}',
                autoMod: {
                    enabled: false
                }
            }
        },
        role: {
            modRole: 'Mod',
            adminRole: 'Adm',
            mutedRole: {
                enabled: false,
                roleID: 'Muted'
            }
        },
        channel: {
            punishChannel: {
                enabled: false,
                channelID: '123'
            },
            logsChannel: {
                enabled: false,
                channelID: '123'
            },
            commandChannel: {
                enabled: false,
                channelID: '123'
            }
        }
   } //configuraç~es padroes pra quando criamos um servidor no mongo
}
