//--dirname表示当前文件所处的目录
console.log(__dirname);

//1 导入fs模块
const fs = require('fs');

//调用readFile方法
fs.readFile(__dirname + '/files/1.txt','utf8',function(err,datastr) {
    if (err) {
        return console.log('读取失败' + err.message);
    }
    console.log('读取成功');
})