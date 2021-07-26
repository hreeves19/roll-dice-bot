const { assert } = require('chai');
const _ = require('underscore');
const Roll = require('../utils/roll');

describe('roll.js', () => {
    describe('findDiceNumber', () => {

        it('should find a dice with 4 sides', () => {
            const input = '$roll d4';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 4);
        });

        it('should find a dice with 6 sides', () => {
            const input = '$roll d6';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 6);
        });

        it('should find a dice with 8 sides', () => {
            const input = '$roll d8';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 8);
        });

        it('should find a dice with 10 sides', () => {
            const input = '$roll d10';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 10);
        });

        it('should find a dice with 12 sides', () => {
            const input = '$roll d12';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 12);
        });

        it('should find a dice with 20 sides', () => {
            const input = '$roll d20';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 20);
        });

        it('should find a dice with 100 sides', () => {
            const input = '$roll d100';

            const result = Roll.findDiceNumber(input);

            assert.equal(result, 100);
        });

        it('should not find a dice with 30 sides', () => {
            const input = '$roll d30';
            let observedError;

            try {
                Roll.findDiceNumber(input);
            } catch (error) {
                observedError = error;
            }

            assert.equal(observedError.message, `Cannot find dice with command: ${input}`);
        });
    });

    describe('rollDice', () => {
        const MAX_ATTEMPTS = 10_000;
        let attempts;

        beforeEach(() => {
            attempts = 0;
        });

        function foundAllPossibilities(hasFoundAllPossiblilties, inputString) {
            while (hasFoundAllPossiblilties.length !== 0 && attempts !== MAX_ATTEMPTS) {
                const result = Roll.rollDice(inputString);
                hasFoundAllPossiblilties = _.reject(hasFoundAllPossiblilties, (possibleValue) => possibleValue === result);
                attempts += 1;
            }

            return hasFoundAllPossiblilties.length === 0;
        }

        it('should roll a d4', () => {
            const inputString = '$roll d4';
            let hasFoundAllPossiblilties = [1, 2, 3, 4];

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });

        it('should roll a d6', () => {
            const inputString = '$roll d6';
            let hasFoundAllPossiblilties = Array.from({length: 6}, (_, i) => i + 1);

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });

        it('should roll a d8', () => {
            const inputString = '$roll d8';
            let hasFoundAllPossiblilties = Array.from({length: 8}, (_, i) => i + 1);

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });

        it('should roll a d10', () => {
            const inputString = '$roll d10';
            let hasFoundAllPossiblilties = Array.from({length: 10}, (_, i) => i + 1);

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });

        it('should roll a d12', () => {
            const inputString = '$roll d12';
            let hasFoundAllPossiblilties = Array.from({length: 12}, (_, i) => i + 1);

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });
        
        it('should roll a d20', () => {
            const inputString = '$roll d20';
            let hasFoundAllPossiblilties = Array.from({length: 20}, (_, i) => i + 1); // Creating array 1 to 20

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });

        it('should roll a d100', () => {
            const inputString = '$roll d100';
            let hasFoundAllPossiblilties = Array.from({length: 100}, (_, i) => i + 1); // Creating array 1 to 20

            const result = foundAllPossibilities(hasFoundAllPossiblilties, inputString);

            assert.isTrue(result);
        });
    });
});
