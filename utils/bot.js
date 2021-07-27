const Discord = require("discord.js");
const _ = require('underscore');
const Roll = require('./roll');

const Bot = {
    /**
     * Handles messages for the discord bot.
     * 
     * @param {Discord.Message} msg
     */
    handleMessage: (msg) => {
        const rollRegex = /^\$roll\s*d(100|4|6|8|10|12|20)\s*$/gm;
        const rollMultipleDice = /^\$roll\s*\d+d(100|4|6|8|10|12|20)\s*$/gm;
        let total = 0, rolls = [], replyMessage = '';
        let botReturn = {
            total,
            rolls,
            replyMessage
        };

        if (msg.author.bot) {
            botReturn;
        }

        if (/^\$roll\s+ping\s*$/gm.test(msg.content)) {
            botReturn.replyMessage = `Bot is on!`;
            msg.reply(botReturn.replyMessage);
            return botReturn;
        }

        if (rollMultipleDice.test(msg.content)) {
            rollCountRegex = /\d+d/gm;
            let iteration = +msg.content.match(rollCountRegex)[0].match(/\d+/)[0];

            for (let i = 0; i < iteration; i++) {
                rolls.push(Roll.rollDice(msg.content));
            }
            botReturn.total = _.reduce(rolls, (roll, sum) => roll + sum, 0);

            botReturn.replyMessage = `rolled ${rolls.join(', ')}! Grand total is: ${botReturn.total}!`;
            msg.reply(botReturn.replyMessage);
            return botReturn;
        }

        if (rollRegex.test(msg.content)) {
            const result = Roll.rollDice(msg.content);
            botReturn.replyMessage = `rolled a ${result}!`;
            botReturn.total = result;
            msg.reply(botReturn.replyMessage);
            return botReturn;
        }
    }
};

module.exports = Bot;
