const _ = require('underscore');

const Roll = {
    findDiceNumber: (inputString) => {
        const regex = /d(100|4|6|8|10|12|20)/gm;

        const result = inputString.match(regex);

        if (!result) {
            throw new Error(`Cannot find dice with command: ${inputString}`);
        }

        return +result[0].match(/\d+/)[0];
    },
    rollDice: (inputString) => {
        try {
            const max = Roll.findDiceNumber(inputString);

            return Math.floor(Math.random() * max) + 1;
        } catch (error) {
            return error;
        }
    }
};

module.exports = Roll;
