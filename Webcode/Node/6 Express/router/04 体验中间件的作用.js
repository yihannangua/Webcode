const express = require('express');

const Time = require('../../Node/5 npm包/15 dataFormat')

const app = express();

app.use((req,res,next) => {
    const time = Date.now();
    //为req对象挂载自定义属性，从而把时间共享给后面的路由
    req.startTime = time; 
    next();
});

app.get('/',(req,res) => {
    res.send('Home Page' + Time.dataFromat(req.startTime));
})

app.get('/user',(req,res) => {
    res.send('User Page' + Time.dataFromat(req.startTime));
})

app.listen(80,() => {
    console.log('http://127.0.0.1');
})