'use strict';

import jwt from 'jsonwebtoken';
import configs from '../configs';
class User {


    static signin(req, res) { //登录
        let jwtken = configs.jwt;
        try {
            let req_data = req.query;
            let result, token;
            //console.log(jwtken)
            if (req_data.username && req_data.password) {
                token = jwt.sign(jwtken.payload, jwtken.secret, jwtken.opt);
                if (token) {
                    result = {
                        username: req_data.username,
                        token: token
                    }
                    console.log(token)
                    res.status(200).json(result);
                } else {
                    res.status
                }
            } else {
                res.status(400)
            }
            // res.status(200).json({ data: 'success' })
        } catch (err) {
            throw new Error(err);
        }
    }

    static signup(req, res) { //注册
        try {
            res.status(200).json({ data: 'success' })
        } catch (err) {
            throw new Error(err);
        }
    }
    static signout(req, res) {
        try {
            res.status(200).json({ data: 'success' })
        } catch (err) {
            throw new Error(err);
        }
    }

    static doSome(req, res) {
        let jwtken = configs.jwt;
        let tem_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMzA1XzkwMyIsImlhdCI6MTUwNDU3MDY4OCwiZXhwIjoxNTA1MTcwNjg4fQ.yGw9D8oidandC-DidDSBphhtbc1Ys-xHHIKhJheW4Ss'
            //console.log(req.headers)
        try {
            let token = req.query.token || req.body.token || req.headers['token'] || tem_token;
            // console.log(token);
            let payload = jwt.verify(token, jwtken.secret);
            console.log(payload)
            if (payload.data = '305_903') {
                res.status(200).json({ status: 'success' })
            } else {
                res.status(401)
            }

        } catch (err) {
            throw new Error(err);
        }
    }
}

export default User;