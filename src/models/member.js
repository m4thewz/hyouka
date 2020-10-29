const mongoose = require("mongoose")

const MemberSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    guild: {
        type: String,
        required: true
    },
    coins: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 0
    },
    xp: {
      type: Number,
      default: 0
    },
    daily: {
      type: String,
      default: "0000"
    },
})

module.exports = mongoose.model('User', MemberSchema)