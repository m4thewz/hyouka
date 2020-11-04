const router = require("express").Router()
const User = require('../../models/user')
const GuildConfig = require('../../models/guild')

const client = require('../../../index')

router.get('/', (req, res) => {
    res.render('dashboard/dashboard.ejs', {
    //     guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591
    // ),
      guilds: (req.user.guilds || []).filter(
      u => (u.permissions & 2146958591) === 2146958591
    ),
        user: req.user,
        bot: client
    })
})


router.get('/guilds/:guildId', async (req, res) => {
  console.log(req.user)
    const guild = client.guilds.cache.get(req.params.guildId);
    if(!guild) return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8&guild_id=${req.params.guildId}`)
    if(!guild.members.cache.get(req.user.id).hasPermission("MANAGE_GUILD")) {
        return res.redirect('/')
    }
    let c =  await GuildConfig.findOne({guildId: req.params.guildId})
    if(!c) {
        GuildConfig.create({
            guildId: req.params.guildId
          })
        
    }
    const guildInfo = await GuildConfig.findOne({guildId: req.params.guildId})


    res.render('dashboard/guilds.ejs', {
         guilds: (req.user.guilds || []).filter(
      u => (u.permissions & 2146958591) === 2146958591
    ),
      user: req.user,
        bot: client,
        guild,
        guildInfo
    })
    
    
})
router.post('/guilds/:guildId', async (req, res) => {
    const ak = req.body
    GuildConfig.findOneAndUpdate({guildId: req.params.guildId}, {$set: ak}).then(async () => {
        res.send(ak)
    }).catch((err) => {
        console.log(err)
    })
})
module.exports = router