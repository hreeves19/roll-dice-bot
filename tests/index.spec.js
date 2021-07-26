const { assert } = require('chai');
const App = require('../index');

describe('index.js', () => {

    describe('start', () => {
        it('should start discord bot', async () => {
            let observedError;

            try {
                await App.start();
            } catch (error) {
                console.error(error);
                observedError = error;
            }
    
            assert.isUndefined(observedError);

        });
    });
});