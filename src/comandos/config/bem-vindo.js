const Discord = require('discord.js')
module.exports = {
  name: 'bem-vindo',
  usage: 'bem-vindo <opção> <valor>',
  example: 'bem-vindo descrição Ola {user.name} ao {server.name}',
  aliases: ['welcome'],
  category: 'Configuração',
  description: 'Toda vez que um usuario entrar no servidor o bot mandara uma mensagem',
  run: async (client, message, args, db) => {
    if(message.author.id !== "474206298645331970" && !message.member.hasPermission('MANAGE_GUILD')) {
            client.errorEmbed(`<@${message.author.id}> Você é fraco, lhe falta **Gerenciar Servidor**`)
        }
    else  {
    switch(args[0]) {
          
          
          
        case 'descrição':
        case 'description':
          
          if(args[1]){
            
            db.guild.config.welcomeMessage.embed.description = args.slice(1).join(' ')
            ativarE()
            save()
            client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas editada com sucesso!')
            
          } else {
          
            client.errorEmbed(`Insira um valor valido para a mensagem!\nPara mais informações digite \`${db.guild.prefix}bem-vindo opções\` `)    
          
          }
          
          break;
        case 'title':
        case 'titulo':
            if(args[1]){
            
            
            db.guild.config.welcomeMessage.embed.title = args.slice(1).join(' ')
            ativarE()
            save()
            client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas editada com sucesso!')
            
          } else {
          
            client.errorEmbed(`Insira um valor valido para a mensagem!\nPara mais informações digite \`${db.guild.prefix}bem-vindo opções\` `)    
          
          }
        break;
          
        case 'channel':
        case 'canal':
            if(args[1] && client.channels.cache.get(args[1])){
            
            db.guild.config.welcomeMessage.channel = args[1]

            ativar()
            save()
            
            client.customEmbed(`${message.guild.name} - Dashboard`, 'Canal de boas-vindas editado com sucesso!')
            
          } else {
          
            client.errorEmbed(`Insira um canal válido!\nPara mais informações digite \`${db.guild.prefix}bem-vindo opções\` `)    
          
          }
        break;
        case 'embed':
          switch(args[1]){
            case 'enable':
            case 'ativar':
              
              ativarE()
              save()
              client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas ativada com sucesso!')
              
              break;

              case 'disable':
              case 'desativar':
              
                desativarE()
                save()
              
                client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas desativada com sucesso!')
                break;
              
            default: 
              client.errorEmbed(`Insira um valor valido para a embed!\nPara mais informações digite \`${db.guild.prefix}bem-vindo opções embed\` `)    
          }
          break;
          
        case 'enable':
        case 'ativar':
          
          ativar()
          save()
          client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas ativada com sucesso!')
          break;
          
          
        case 'disable':
        case 'desativar':
          
          desativar()
          save()
          client.customEmbed(`${message.guild.name} - Dashboard`, 'Mensagem de boas-vindas desativada com sucesso!')
          break;
        default:
          
              client.errorEmbed(`Insira uma opção valida para a mensagem!\nPara mais informações digite \`${db.guild.prefix}bem-vindo opções\` `)
    
      
      }
    function ativar(){
      db.guild.config.welcomeMessage.enabled = true
    }
    function desativar(){
      db.guild.config.welcomeMessage.enabled = false
    }
    function ativarE(){      
      db.guild.config.welcomeMessage.enabled = true
      db.guild.config.welcomeMessage.embed.enabled = true
    }
    function desativarE(){
      db.guild.config.welcomeMessage.enabled = false
      db.guild.config.welcomeMessage.embed.enabled = false
    }
    function save(){
      db.guild.save
    }
    
    
    // client.errorEmbed('Esse comando está em manutenção!')
    }
  }
  
  
}