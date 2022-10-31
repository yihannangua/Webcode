//导入mysql模块
const mysql = require('mysql');

//创建数据库连接对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01',
})

//向外共享 db 数据库连接对象
module.exports = db;

db.query('SELECT 1',(err,result) => {
    if (err) return console.log(err.message);
    console.log('能够执行');
})