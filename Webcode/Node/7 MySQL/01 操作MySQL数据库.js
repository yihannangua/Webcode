const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

// //测试MySQL模块是否能正常运行
// db.query('SELECT 1',(err,result) => {
//     if (err) return console.log(err.message);
//     console.log('能够执行');
// })

// const sqlStr = 'select * from users';

// db.query(sqlStr,(err,result) => {
//     if (err) return console.log(err.message);
//     console.log(result);
// })

// const user = {username: 'asdfa',password: 's12312'};

// const sqlStr = 'insert into users (username,password) values (?,?)';

//插入数据
// db.query(sqlStr,[user.username,user.password],(err,result) => {
//     if (err) return console.log(err.message);
//     if (result.affectdRows === 1) {
//         console.log('插入成功');
//     }
// })

//插入数据的便捷语句
// const user = {username: 'as12dfa',password: 's1332312'};

// const sqlStr = 'insert into users set ?';

// db.query(sqlStr,user,(err,result) => {
//     if (err) return console.log(err.message);
//     if (result.affectdRows === 1) {
//         console.log('插入成功');
//     }
// })

// //更新数据
// const user = {id:13,username:'aaa',password:'900012'};

// const sqlStr = 'update users set username=?,password=? where id =?'

// db.query(sqlStr,[user.username,user.password,user.id],(err,result) => {
//     if (err) return console.log(err.message);
//     if (result.affectdRows === 1) {
//         console.log('插入成功');
//     }
// })


//更新数据快捷语句
// const user = {id:13,username:'234234',password:'2341df'};

// const sqlStr = 'update users set ? where id=?';

// db.query(sqlStr,[user,user.id],(err,result) => {
//     if (err) return console.log(err.message);
//     if (result.affectdRows === 1) {
//         console.log('插入成功');
//     }
// })

//删除数据
const sqlStr = 'delete from users where id=?';

db.query(sqlStr,[3,5],(err,result) => {
    if (err) return console.log(err.message);
    if (result.affectdRows === 1) {
        console.log('删除成功');
    }
})
