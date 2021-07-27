const { assert } = require('chai');
const _ = require('underscore');
const Bot = require('../utils/bot');

describe('Discord Bot', () => {
    describe('handleMessage', () => {
        it('should ignore messages from bots', () => {
            const msg = { author: { bot: true } }; // Mock Message

            const result = Bot.handleMessage(msg);

            assert.isUndefined(result);
        });

        context('valid commands', () => {
            it('should "$roll ping"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll ping', reply: (message) => observedMessage = message };
                let observedMessage;
                const expectedMessage = `Bot is on!`;

                const result = Bot.handleMessage(msg);

                assert.equal(result.replyMessage, expectedMessage);
                assert.equal(observedMessage, expectedMessage);
            });

            it('should "$roll d4"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll d4', reply: (message) => observedMessage = message };
                let observedMessage;
                
                const result = Bot.handleMessage(msg);
                const diceRoll = +result.replyMessage.match(/\d+/gm)[0];
                const expectedMessage = `rolled a ${diceRoll}!`;


                assert.equal(result.replyMessage, expectedMessage);
                assert.equal(result.total, diceRoll);
                assert.equal(observedMessage, expectedMessage);
            });

            it('should "$roll 3d6"', () => {
                const msg = { author: { username: 'MisterCleann', bot: false }, content: '$roll 3d6', reply: () => {} };

                const result = Bot.handleMessage(msg);
                const total = _.reduce(result.rolls, (roll, sum) => roll + sum, 0);

                const expectedMessage = `rolled ${result.rolls.join(', ')}! Grand total is: ${total}!`;

                assert.equal(result.replyMessage, expectedMessage);
                assert.equal(result.rolls.length, 3);
                assert.equal(result.total, total);
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