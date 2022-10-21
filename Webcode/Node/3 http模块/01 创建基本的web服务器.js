//1 导入http模块
const http = require('http');
//2 创建web服务器实例
const server = http.createServer();
//3 为服务器实例绑定request事件
server.on('request',function(req,res) {
    console.log('服务器有人访问了服务器');
})
//4 启动服务器
server.listen(8080,function() {
    console.log('服务器启动了，地址：http://127.0.0.1:8080');
})