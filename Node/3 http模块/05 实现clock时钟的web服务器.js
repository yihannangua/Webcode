
const fs = require('fs');
const path = require('path');
const http = require('http');


const server = http.createServer();

server.on('request',(req,res) => {
    const url = req.url;
    var fpath = '';

    if (url === '/') {
        fpath = path.join(__dirname,'/clock/index.html');
    } else {
        fpath = path.join(__dirname,'/clock',req.url);
    }
    console.log(fpath);
    fs.readFile(fpath,'utf8',(err,datastr) => {
        if (err) {
            return res.end('404 Not Found!')
        }
        res.end(datastr);
    })
    // res.end(content);
})


server.listen(80,() => {
    console.log('服务器启动了，地址：http://127.0.0.1');
})