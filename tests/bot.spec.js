const { assert } = require('chai');
const _ = require('underscore');
const Bot = require('../utils/bot');
const Discord = require("discord.js");

describe('Discord Bot', () => {
    describe('handleMessage', () => {
        it('should ignore messages from bots', () => {
            const msg = { author: { bot: true } }; // Mock Message

            const result = Bot.handleMessage(msg);

            assert.isUndefined(true);
        });

        context('valid commands', () => {
            it('should "$test"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$test', reply: (message) => observedMessage = message };
                let observedMessage;
                const expectedMessage = `Bot is on!`;

                const result = Bot.handleMessage(msg);

                assert.equal(result, expectedMessage);
                assert.equal(observedMessage, expectedMessage);
            });

            it('should "$roll d4"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d4', reply: (message) => observedMessage = message };
                let observedMessage;

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];

                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
                assert.equal(observedMessage, `${msg.author.username} rolled a ${diceRoll}!`);
            });

            it('should "$roll d6"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d6', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];

                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
            });

            it('should "$roll d10"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d10', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];

                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
            });

            it('should "$roll d12"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d12', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];

                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
            });

            it('should "$roll d20"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d20', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];

                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
            });

            it('should "$roll d100"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d100', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const diceRoll = result.match(/\d+/gm)[0];


                assert.equal(result, `${msg.author.username} rolled a ${diceRoll}!`);
            });
        });

        context('invalid commands', () => {
            it('should return undefined on "roll d100"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: 'roll d100', reply: () => {} };

                const result = Bot.handleMessage(msg);

                assert.isUndefined(result);
            });

            it('should return undefined on "test"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: 'test', reply: () => {} };

                const result = Bot.handleMessage(msg);

                assert.isUndefined(result);
            });
        });
    });
});