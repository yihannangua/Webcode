const express = require('express');

const app = express();

const m1 = function (req,res,next) {
    console.log('这是一个中间件');
    next();
}

app.get('/',m1,(req,res) => {
    res.send('home page');
})

app.get('/user',(req,res) => {
    res.send('user page');
})

app.listen(80,() => {
    console.log('服务启动了，地址：http://127.0.0.1');
})