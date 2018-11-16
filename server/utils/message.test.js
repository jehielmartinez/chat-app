let expect = require('expect');

let {generateMessage} = require('./message');

describe('Function generate message', ()=>{

    it('should generate correct message object', () => {
        let from = 'Jehiel';
        let text = 'Message from Jehiel';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text,
        });

    });


});