const express = require("express");

//导入node.js内置的querystrig模块
const cbp = require('./custom-body-parser');

const app = express();

//解析表单数据的中间件
app.use(cbp);

app.post('/user',(req,res) => {
    res.send(req.body);
})


app.listen(80,() => {
    console.log('服务启动了，http://127.0.0.1');
})