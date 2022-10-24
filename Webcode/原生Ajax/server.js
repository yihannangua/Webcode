//1.引入 express
const { request, response } = require('express');
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
app.all('/json-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应一个数据
    const data = {
        name: 'bingnan'
    };
    //对data进行字符串转换ß
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});
//针对IE缓存的规则
app.get('/ie',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello IE112312');
});
//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});
//fetch服务
app.all('/fetch-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello IE112312');
});

//jsonp服务
app.all('/jsonp-server',(request,response)=>{
    const data = {
        name: 'libingnan'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})

//检测用户名是否存在
app.all('/check-username',(request,response)=>{
    const data = {
        exist: 1,
        msg: '用户名已存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
})


//4.监听端口启用服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000 端口监听中…");
}) 