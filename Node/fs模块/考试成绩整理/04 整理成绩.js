const fs = require('fs');

fs.readFile('/Users/doit/个人云盘/028 学习进修/002 编程学习/前端学习/004 练习代码/001 text/Node/fs模块/考试成绩整理/files/成绩.txt','utf8',function(err,data) {
    if (err) {
        return console.log('读取失败');
    }
    //以空格分隔字符串为数组
    var content1 = data.split(' ');
    //将数组中的=替换为：
    var arr1 = content1.map(str => str.replace('=',': '));
    //拼接数组为字符串并换行
    var content2 = arr1.join('\n');
    fs.writeFile('/Users/doit/个人云盘/028 学习进修/002 编程学习/前端学习/004 练习代码/001 text/Node/fs模块/考试成绩整理/files/成绩-OK.txt',content2,function(err) {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    })
})
