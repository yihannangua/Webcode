//导入数据库操作模块
const db = require('../db/index');

//导入bcyptjs
const bcypt = require('bcryptjs');

//导入生成 token 的包
const jwt = require('jsonwebtoken');
//导入全局配置文件
const config = require('../config')

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
        if (result.length > 0) return res.cc('用户名被占用，请更换其他用户名！');        
        //调用 bcypt.hashSycs()对密码进行加密
        userinfo.password = bcypt.hashSync(userinfo.password,10);
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
    const userinfo = req.body;

    const sqlLogin = 'select * from ev_users where username=?';

    db.query(sqlLogin,userinfo.username,(err,result) => {
        //执行 sql 失败
        if (err) return res.cc(err);
        //执行 sql 成功，但是结果条数不等于 1
        if (result.length !== 1) return res.cc('登录失败');
        //登录密码是否正确
        const compareResult = bcypt.compareSync(userinfo.password,result[0].password);
        if (!compareResult) res.send('登录失败！');
        //在服务器端生成 Token 字符串
        const user = {...result[0],password: '',user_pic: ''};
        //对用户的信息进行加密，生成 Token 字符串
        const tokenStr = jwt.sign(user,config.jwtsecretKey,{ expiresIn: config.expiresIn });
        //调用 res.send 将 Token 响应给客户端
        res.send({
            status: 0,
            msg: '登录成功',
            token: 'Bearer ' + tokenStr,//添加固定前缀 bearar
        })
    })
}

//获取用户信息的函数
exports.userInfo = (req,res) => {
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?';
    db.query(sql,req.user.id,(err,result) => {
        //执行 sql 失败
        if (err) return res.cc(err);
        //执行 sql 成功，但是结果条数不等于 1
        if (result.length !== 1) return res.cc('查询数据错误！');
        //查询成功
        res.send({
            status: 0,
            msg: '获取用户基本信息成功！',
            data: result[0],
        })
    })
    // res.send({
    //     status: 0,
    //     msg: '获取用户信息成功！',
    // })
}

//更新用户信息的函数
exports.updateUserInfo = (req,res) => {
    const sql = 'update ev_users set ? where id=?';
    db.query(sql,[req.body,req.user.id],(err,result) =>{
        //执行 sql 失败
        if (err) return res.cc(err);
        //执行 sql 成功，但是结果条数不等于 1
        if (result.affectedRows !== 1) return res.cc('更新用户信息失败！');
        //更新成功
        res.send({
            status: 0,
            msg: '更新用户信息成功！'
        })
    })
    
}


//更新用户头像的函数
exports.updateAvatar = (req,res) => {
    console.log(req.body);
    console.log(req.user.id);
    
    const sql = 'update ev_users set user_pic=? where id=?';

    db.query(sql,[req.body.user_pic,req.user.id],(err,result) =>{
        //执行 sql 失败
        if (err) return res.cc(err);
        //执行 sql 成功，但是结果条数不等于 1
        if (result.affectedRows !== 1) return res.cc('更新用户头像失败！');
        //更新成功
        res.send({
            status: 0,
            msg: '更新用户信息成功！'
        })
    })
}


//重置用户密码的函数
exports.updatePwd = (req,res) => {
    const pwts = req.body;
    const sqlCheck = 'select password from ev_users where id=?';

    db.query(sqlCheck,pwts.id,(err,result) => {
        //执行 sql 失败
        if (err) return res.cc(err);
        //执行 sql 成功，但是结果条数不等于 1
        if (result.length !== 1) return res.cc('重置失败');
        //旧密码是否正确
        const compareResult = bcypt.compareSync(pwts.oldpwd,result[0].password);
        if (!compareResult) return res.send('旧密码不正确！');
        //调用 bcypt.hashSycs()对密码进行加密
        pwts.newpwd = bcypt.hashSync(pwts.newpwd,10);

        const sqlUpdatepwd = 'update ev_users set password=? where id=?';
        db.query(sqlUpdatepwd,[pwts.newpwd,pwts.id],(err,result) => {
            //执行 sql 失败
            if (err) return res.cc(err);
            //执行 sql 成功，但是结果条数不等于 1
            if (result.affectedRows !== 1) return res.cc('重置失败');
            res.send({
                status: 0,
                msg: '重置密码成功！',
            })
        })
    })  
}