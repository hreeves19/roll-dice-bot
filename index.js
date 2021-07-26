require('dotenv').config();
const Discord = require("discord.js");
const Bot = require('./utils/bot');

const App = {
    client: new Discord.Client(),
    start: async () => {
        try {
            await App.client.login(process.env.BOT_TOKEN);
            App.client.on("ready", () => {
                console.log(`Logged in as ${App.client.user.tag}!`);
            });
    
            App.client.on("message", msg => Bot.handleMessage(msg));
        } catch (error) {
            console.error(error);
        }
        
    }
};

App.start();

module.exports = App;
