// 导入 express 模块
const express = require('express');
// 创建 express 的服务器实例
const app = express();

const joi = require('joi');

//导入cors中间件
const cors = require('cors');
//将cors注册为全局中间件
app.use(cors());

//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

//响应数据中间件
app.use(function (req,res,next) {
    //status = 0 为成功，status =1 为失败，默认将status设置为1，方便处理失败的情况
    res.cc = function (err,status = 1) {
        res.send({
            status,
            msg:err instanceof Error ? err.message : err
        })
    }
    next();
})

//在路由之前配置解析 Token 的中间件
const expressJWT = require('express-jwt');
const config = require('./config');

app.use(expressJWT({secret: config.jwtsecretKey}).unless({path: [/^\/api\//]}));

//导入并使用用户路由模块
const userRouter = require('./router/user');
const { use } = require('./router/user');
const Joi = require('joi');
app.use('/api',userRouter);

//导入并使用用户信息路由模块
const userInfoRouter = require('./router/userinfo');
app.use('/my',userInfoRouter);

//定义错误级别的中间件
app.use((err,req,res,next) => {
    //验证失败的错误
    if (Joi.ValidationError) return res.cc(err);
    //身份认证失败的错误
    if (err.name === 'UnauthorizedError')  return req.cc('身份认证失败！');
    //未知错误
    res.cc(err);
})

//监听服务器启动事件
app.listen(3007,(req,res) => {
    console.log('服务已启动，http://127.0.0.1:3007');
})

