//导入express
const express = require('express');
//创建Web服务器
const app = express();

//监听客户端的GET和POST请求，冰箱客户端响应具体的内容
app.get('/user',(req,res) => {
    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({
        name: '张三',
        age: 20,
        gender: '男'
    })
})

app.post('/user',(req,res) => {
    //调用express提供的req.send()方法，向客户端响应一个文本字符串
    res.send('请求成功！')
})

//通过req.query对象，获取URl中携带的参数
app.get('/',(req,res) => {
    console.log(req.query);
    res.send(req.query);
})

//:id是一个动态参数
app.get('/user/:id/:name',(req,res) => {
    console.log(req.params);
    res.send(req.params);
})

//启动Web服务器
app.listen(80,() => {
    console.log('启动成功');
})