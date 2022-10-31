const express = require('express');

const app = express();

const path = require('path');

//配置Session中间件
const session = require('express-session');

app.use(
    session({
        secret: 'itheima',
        resave: false,
        saveUninitialized: true,
})
)

app.use(express.static(path.join(__dirname,'/pages')));

app.use(express.urlencoded({extended: false}));


//登录的API接口
app.post('/api/login',(req,res) => {
    //判断用户提交的登录信息是否正确
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 1,msg: '登录失败'})
    }

    //将用户登录成功后的信息，保存到 session 中
    //只有配置了expre-session这个中间件之后，才能通过req点出来session这个属性
    req.session.user = req.body;
    req.session.islogin = true;

    res.send({status: 0,msg: '登录成功'});
})

//获取用户姓名的接口
app.get('/api/username',(req,res) => {
    //判断用户是否登录
    if (!req.session.islogin) {
        return res.send({status: 1,msg: 'fail'});
    }

    res.send({
        status: 0,
        msg: 'success',
        username: req.session.user.username
    })
})

//退出登录的接口
app.post('/api/logout',(req,res) => {
    req.session.destroy();
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})

app.listen(80,(req,res) => {
    console.log('服务启动了，http://127.0.0.1:80');
})