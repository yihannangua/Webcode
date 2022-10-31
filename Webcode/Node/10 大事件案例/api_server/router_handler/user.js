//导入数据库操作模块
const db = require('../db/index');

//导入bcyptjs
const bcypt = require('bcryptjs');

function resErr(errMsg) {
    res.send({
        status: 1,
        msg:errMsg
    })
}

//注册新用户的处理函数
exports.regUser = (req,res) => {
    //接收表单数据
    const userinfo = req.body;
    //判断数据是否合法
    if (!userinfo.username || !userinfo.password) {
        return res.cc('用户名或密码不能为空！');
    }
    //定义查询局域，查询所有数据
    const sqlStr = 'select * from ev_users where username=?'; 
    db.query(sqlStr,userinfo.username,(err,result) => {
        //判断查询是否出错
        if (err) return res.cc(err.message);

        //判断用户名是否重复
        if (result.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！');
        }
        //调用 bcypt.hashSycs()对密码进行加密
        userinfo.password = bcypt.hashSync(userinfo.password,10);
        console.log(userinfo);

        //定义插入用户的语句
        const sqlStr2 = 'insert into ev_users set ?';
        db.query(sqlStr2,{username: userinfo.username,password: userinfo.password},(err,result) => {
            //语句执行失败
            if(err) return res.send({
                status: 1,
                msg: err.message
            })
            //语句执行成功，但影响行数不为1
            if (result.affectedRows !== 1) return res.cc( '注册失败，请稍后再试！');
            //注册成功
            res.cc('注册成功',0)
        } )
    })

}

//登录的处理函数
exports.login = (req,res) => {
    res.send('login ok');
}