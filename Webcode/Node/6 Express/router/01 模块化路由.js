const express = require('express');

const app = express();

//导入路由模块
const router = require('./02 router');

//注册路由模块
app.use('/api',router);

app.listen(80,() => {
    console.log('80服务启动了');
})