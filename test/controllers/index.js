import superagent from 'superagent';
import { expect } from 'chai';
import Index from '../../app/controllers/index';
import server from '../../app';

let port = 3000;
describe('Index', () => {

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