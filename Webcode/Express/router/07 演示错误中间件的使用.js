const express = require('express');

const app = express();

//定义路由
app.get('/',(req,res) => {
    //认为制造错误
    throw new Error('服务器内部发生了错误');
    res.send('Home page');
})

//定义错误级别的中间件，捕获整个项目的错误，防止程序崩溃
app.use((err,req,res,next) => {
    console.log(err.message);
    res.send('Error:' + err.message)
})

app.listen(80,() => {
    console.log('服务启动了');
})