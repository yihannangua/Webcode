// 导入 express 模块
const express = require('express');
// 创建 express 的服务器实例
const app = express();

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

//导入并使用用户路由模块
const userRouter = require('./router/user');
app.use('/api',userRouter);

//监听服务器启动事件
app.listen(3007,(req,res) => {
    console.log('服务已启动，http://127.0.0.1:3007');
})

