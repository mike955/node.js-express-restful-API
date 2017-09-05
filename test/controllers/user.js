import superagent from 'superagent';
import { expect } from 'chai';
import Index from '../../app/controllers/user';
import server from '../../app';

describe('User', () => {

    before(() => {
        server.listen(3000, (err) => {
            //debug('listen')
            if (err) {
                throw new Error(err);
            }
            console.log('Server start at ' + 3000);
        })
    })

    after(() => {
        server.close();
    })
    describe('User router', () => {
        it('should return 200', (done) => {

        })
    })
})