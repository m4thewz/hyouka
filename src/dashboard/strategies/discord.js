const passport = require("passport")
const DiscordStrategy = require("passport-discord")
const User = require('../../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({id})
        return user ? done(null, user) : done(null, null)
    }catch(err) {
        console.log(err)   
        done(err, null)
    }
})

passport.use(
    new DiscordStrategy({ //Cria uma stragey do passport
        clientID: process.env.DASHBOARD_CLIENT_ID, //id do client
        clientSecret: process.env.DASHBOARD_CLIENT_SECRET,//token do client(não do bot mas sim do client)
        callbackURL: process.env.DASHBOARD_CALLBACK_URL, //callback do oauth
        scope: ['identify', 'guilds'] //escopos, você pode adicionar mais, mas so vou usar esse
    }, async (acessToken, refreshToken, profile, done) => {
        const { id, username, discriminator, avatar, guilds } = profile
        try { //Cria o schema do user
            const findUser = await User.findOneAndUpdate({ id }, {
                discordTag: `${username}#${discriminator}`,
                avatar,
                guilds,
                username,
                tag: discriminator
            }, {new: true})
            if(findUser){
                console.log("Novo usuario...")
                return done(null, findUser)
            } else{
                const newUser = await User.create({
                    id,
                    discordTag: `${username}#${discriminator}`,
                    avatar,
                    guilds,
                    username,
                    tag: discriminator
                })
                return done(null, newUser)
            }
        } catch(err) {
            console.log(err)
            return done(err, null)
        }
    })
)