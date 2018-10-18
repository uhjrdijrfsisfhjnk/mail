var Discord = require("discord.js");
var client = new Discord.Client();
var prefix = "-" // PREFIX 
client.on("message", (message) => {
    if(message.content.startsWith(prefix+"email")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})
client.login(process.env.BOT_TOKEN); 
