const express = require('express');

const app = express();

//配置解析json格式的全局中间件
app.use(express.json());

//配置解析URL-encoded格式的中间件
app.use(express.urlencoded());

//定义路由
app.post('/user',(req,res) => {
    res.send('ok');
    console.log(req.body);
})

app.listen(80,() => {
    console.log('服务启动了');
})

