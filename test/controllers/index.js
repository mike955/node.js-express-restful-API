import superagent from 'superagent';
import { expect } from 'chai';
import Index from '../../app/controllers/index';
import server from '../../app';

describe('Index', () => {

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
    describe('index router', () => {
        it('should return 200', (done) => {
            superagent
                .get('http://localhost:' + 3000)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    done()
                })
        })
    })
})