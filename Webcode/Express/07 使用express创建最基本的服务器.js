//导入express
const express = require('express');
//创建Web服务器
const app = express();
//启动Web服务器
app.listen(80,() => {
    console.log('启动成功');
})