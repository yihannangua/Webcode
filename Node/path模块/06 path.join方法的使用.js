const path = require('path');

const fs = require('fs');

var txtPath = path.join(__dirname,'../','/fs模块','/files/1.txt');
console.log(txtPath);

fs.readFile(txtPath,'utf8',function(err,data) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功');
    console.log('内容：');
    console.log(data);
})



// var pathStr = path.join('/a','/b/c','../','./d','e');
// console.log(pathStr); //输出 /a/b/d/e