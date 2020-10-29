require('./glitch.js') //serviço de auto ping

const mongoose = require('mongoose')
const { Client, Collection, MessageEmbed } = require("discord.js");

const firebase = require('firebase')

const { readdirSync } = require("fs");
const { join } = require("path");

const client = new Client({
    disableMentions: 'everyone'
})

require("./src/utils/functions")(client);

client.config = require("./config");
const firebaseConfig = {
    apiKey: "AIzaSyCumrBHmSfX5aKPbnPcIKMIjbpALwNoaL8",
    authDomain: "hyouka-bot.firebaseapp.com",
    databaseURL: "https://hyouka-bot.firebaseio.com",
    projectId: "hyouka-bot",
    storageBucket: "hyouka-bot.appspot.com",
    messagingSenderId: "641716428744",
    appId: "1:641716428744:web:ed8d0642a435777f4caafd",
    measurementId: "G-GY6VKG5KD7"
  }; 

  
firebase.initializeApp(firebaseConfig)
const eventFiles = readdirSync(join(__dirname, "src/eventos")).filter((file) => file.endsWith(".js")); // pega a pasta eventos e filtra os arquivos que tem .js
    
  for (const file of eventFiles) { //for para cada arquivo
    const event = require(join(__dirname, "src/eventos", `${file}`)); // pega o arquivo
    let eventName = file.split(".")[0]; // pega o nome dele
    client.on(eventName, (...args) => event.run(client, ...args))// agora seta o evento
  }
  client.login(process.env.BOT_TOKEN);
module.exports = client//exporta o cliente(para a dashboard)

//vc tambem pode usar um exports.run na dashboard ai você faria isso require('./src/dashboard/server.js')(client) mas ja tinha feito assim ai fiquei com preguiça

require('./src/dashboard/server.js') //pra iniciar a dashboard
//❯