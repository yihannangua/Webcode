//1 导入http模块
const http = require('http');
//2 创建web服务器实例
const server = http.createServer();
//3 为服务器实例绑定request事件
server.on('request',(req,res) => {
    console.log(req.url);
    console.log(req.method);
})
//4 启动服务器
server.listen(80,() => {
    console.log('服务器启动了，地址：http://127.0.0.1');
})