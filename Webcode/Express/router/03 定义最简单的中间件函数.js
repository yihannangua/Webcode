const express = require('express');

const app = express();

//将mw注册为全局中间件
app.use((req,res,next) => {
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或路由
    next();
});

//next()传递给后续请求
app.get('/',(req,res) => {
    res.send('Home Page');
})

app.get('/user',(req,res) => {
    res.send('User Page');
})

app.listen(80,() => {
    console.log('http://127.0.0.1');
})