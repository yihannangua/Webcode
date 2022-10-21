//1 导入http模块
const http = require('http');
//2 创建web服务器实例
const server = http.createServer();
//3 为服务器实例绑定request事件
server.on('request',(req,res) => {
    const url = req.url;
    let content = '<h1>404 Not Found!</h1>'
    if(url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(content);
})
//4 启动服务器
server.listen(80,() => {
    console.log('服务器启动了，地址：http://127.0.0.1');
})