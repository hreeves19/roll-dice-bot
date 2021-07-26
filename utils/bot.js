const Discord = require("discord.js");
const Roll = require('./roll');

const Bot = {
    /**
     * Handles messages for the discord bot.
     * 
     * @param {Discord.Message} msg 
     */
    handleMessage: (msg) => {
        const rollRegex = /^\$roll\s*d(100|4|6|8|10|12|20)\s*$/gm;

        if (msg.author.bot) {
            return;
        }

        if (/^\$test\s*$/gm.test(msg.content)) {
            const replyMessage = `Bot is on!`;
            msg.reply(replyMessage);
            return replyMessage;
        }

        if (rollRegex.test(msg.content)) {
            const result = Roll.rollDice(msg.content);
            const replyMessage = `${msg.author.username} rolled a ${result}!`;
            msg.reply(replyMessage);
            return replyMessage;
        }
    }
};

module.exports = Bot;
