//1 导入fs模块
const fs = require('fs');

//调用readFile方法
fs.readFile('./files/1.txt','utf8',function(err,datastr) {
    //判断err是否为ture
    if (err) {
        return console.log('读取文件失败！' + err.message);        
    }
    console.log(datastr);
    //s 
})