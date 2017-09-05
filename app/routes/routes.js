'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import express from 'express';
import debugg from 'debug';

/***** import own libraries *****/
import Index from '../controllers/index';
import User from '../controllers/user';

let router = express.Router();
let debug = debugg('MERN');

debug('Router:use middlware');
// router.use((req, res, next) => {
//     next();
// });
debug('Router:start');
router
    .get('/', Index.index) //首页
    .post('/signin', User.signin) //登录
    .post('/signup', User.signup) //注册
    .get('/doSome', User.doSome) //doSomething



module.exports = router;