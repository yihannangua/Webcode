const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

const {expressjwt: expressJWT} = require('express-jwt');


// 允许跨域资源共享
const cors = require('cors');
app.use(cors());

//解析 post 表单数据的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extendde: false}));

//定义secret密钥，建议命名为secretKey
const secretKey = 'itheima No1 ^-^';

//注册将JWT字符串解析还原成 JSON对象的中间件
app.use(expressJWT({secret: secretKey,algorithms:["HS256"]}).unless({path:[/^\/api\//]}));

//登录接口
app.post('/api/login',(req,res) => {
    //将 req.body 请求体中的数据，转存为 userinfo 常量 
    const userinfo = req.body;
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            msg: '登录失败',
        })
    }
    //登陆成功
    //千万不要把密码加密到token字符串中
    const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '30s'});
    res.send({
        status: 200,
        msg: '登陆成功',
        //调用 jwt.sign()生成JWT字符串，三个参数分别是：用户信息对象、加密密钥、配置对象
        token: tokenStr, //要发送给客户端的 token 字符串
    })
})

//这是一个有权限的接口
app.get('/admin/getinfo',(req,res) => {
    console.log('ok');
    res.send({
        status: 200,
        msg: '获取用户信息成功',
        data: req.auth
    })
})


//捕获解析JWT失败后的错误
app.use((err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 400,
            msg: '无效的token'
        })
    }
    res.send({
        status: 500,
        msg: '位置错误'
    })
})


app.listen(80,(req,res) => {
    console.log('服务器已启动，http://127.0.0.1:80');
})