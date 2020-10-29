const router = require('express').Router()
const auth = require('./auth')
const client = require('../../../index')
const dashboard = require('./dashboard')
const checkAuth = require('../utils/checkAuth')

router.get('/', (req, res) => {
    res.render('index.ejs', {
        bot: client,
        user: req.user
    })
})
router.get('/comandos', (req, res) => {
    res.render('commands.ejs', {
        comandos: [ ...new Set(client.commands.filter(x => x.category !== 'Owner').map(x => x))],
        categorias: [ ...new Set(client.commands.filter(x => x.category !== 'Owner').map(x => x.category))],
        bot: client,
        user: req.user
    })
})
router.get('/login', (req, res) => {
    res.redirect('/auth/discord')
})
router.get('/logout', async (req, res) => {
    await req.logout()
    await res.redirect("/");
})
router.get('/invite', (req, res) => {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=542665568788938752&permissions=8&redirect_uri=http%3A%2F%2Fhyouka-web.glitch.me%2Fauth%2Fdiscord%2Fredirect&scope=bot')
})
router.use("/auth", auth)
router.use("/dashboard", checkAuth, dashboard)

router.get('*', (req, res) => {
    res.status(404).render('404.ejs', {
      user: req.user,
      bot: client
    })
})

module.exports = router

// guilds: client.guilds.cache.filter(g => g.members.cache.has(req.user.id)),
// user: req.user,
// bot: client