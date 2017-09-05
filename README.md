# node.js-express-restful-API
A restful demo using node.js, express, and JWT

## API

|method|req|res|meaning|
|---|---|---|---|
|post|/signin/username=123&password=456|200 & token|登录|
|post|/signup/username=123456&password=456|200|注册|
|get|/signout|200|退出|
|get|/doSome|200|验证token|


## mocha use ES6/7
```
npm install --save-dev babel-register

"scripts" : {
    "test" : "mocha --compilers js:babel-register"
}
```