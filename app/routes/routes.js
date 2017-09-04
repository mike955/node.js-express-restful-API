'use strict';
/***** import node.js librarie *****/

/***** import third-party libraries *****/
import express from 'express';
import debugg from 'debug';

/***** import own libraries *****/
import Index from '../controllers/index'

let router = express.Router();
let debug = debugg('MERN');

debug('Router:use middlware');
// router.use((req, res, next) => {
//     next();
// });
debug('Router:start');
router.get('/', Index.index) //首页



module.exports = router;