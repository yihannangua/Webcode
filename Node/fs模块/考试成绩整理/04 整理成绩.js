const fs = require('fs');

fs.readFile('./files/成绩.txt','utf8',function(err,data) {
    if (err) {
        return console.log('读取失败');
    }
    //以空格分隔字符串为数组
    var content1 = data.split(' ');
    //将数组中的=替换为：
    var arr1 = content1.map(str => str.replace('=',': '));
    //拼接数组为字符串并换行
    var content2 = arr1.join('\n');
    fs.writeFile('./files/成绩-OK.txt',content2,function(err) {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    })
})
