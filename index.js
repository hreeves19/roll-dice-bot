require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
    const rollRegex = /roll\s*d(4|6|8|10|12|20)/gm;

    if (msg.author.bot) {
        return;
    }

    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login(process.env.TOKEN);