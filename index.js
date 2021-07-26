require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const Bot = require('./utils/bot');

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (/^\$test\s*$/gm.test(msg.content)) {
        const replyMessage = `Bot is on!`;
        msg.reply(replyMessage);
        return replyMessage;
    }

    Bot.handleMessage(msg);
});

client.login(process.env.TOKEN);

module.exports = client;
