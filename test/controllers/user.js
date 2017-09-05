import superagent from 'superagent';
import { expect } from 'chai';
import Index from '../../app/controllers/user';
import server from '../../app';

let port = 3000;
describe('User', () => {

    before(() => {
        server.listen(port, (err) => {
            //debug('listen')
            if (err) {
                throw new Error(err);
            }
            console.log('Server start at ' + port);
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