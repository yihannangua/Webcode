//1 导入http模块
const http = require('http');
//2 创建web服务器实例
const server = http.createServer();
//3 为服务器实例绑定request事件
server.on('request',(req,res) => {
    const url = req.url;
    const method = req.method;

    const str = `访问的地址是：${url} ,请求的方式是：${method}`;
    console.log(str);
    //解决中文乱码的问题
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(str);
})
//4 启动服务器
server.listen(80,() => {
    console.log('服务器启动了，地址：http://127.0.0.1');
})