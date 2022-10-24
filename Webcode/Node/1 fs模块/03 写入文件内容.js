const fs = require('fs');

fs.writeFile('./files/2.txt','abc水电费撒旦法d',function(err) {
    if (err) {
        return console.log('写入失败，失败原因：' + err.message);
    }
    console.log('写入成功');

})