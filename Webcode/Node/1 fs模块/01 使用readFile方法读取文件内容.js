//1 导入fs模块
const fs = require('fs');

//调用readFile方法
fs.readFile('./files/1/txt','utf8',function(err,datastr) {
    //打印失败的结果
    console.log(err);
    console.log('-----');
    //打印成功的结果
    console.log(datastr);
    //s 
})