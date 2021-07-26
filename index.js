require('dotenv').config();
const Discord = require("discord.js");
const Bot = require('./utils/bot');

const App = {
    client: new Discord.Client(),
    start: async () => {
        await App.client.login(process.env.BOT_TOKEN);
        
        App.client.on("ready", () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        App.client.on("message", msg => Bot.handleMessage(msg));
        // App.client.on('error', (error) => Bot.handleError)
    }
};

module.exports = App;
