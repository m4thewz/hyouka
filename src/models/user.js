const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
    },
    tag: {
        type: String,
    },
    discordTag: {
        type: String,
    },
    avatar: {
        type: String,
    },
    guilds: {
        type: Array,
    },
    casado: {
      type: String,
      default: ''
    }
    // hCoins: {
    //   type: Number,
    //   default: 0
    // },
    // level: {
    //   type: Number,
    //   default: 0
    // },
    // xp: {
    //   type: Number,
    //   default: 0
    // },
    // daily: {
    //   type: String,
    //   default: "0000"
    // },
})

module.exports = mongoose.model('User', UserSchema)