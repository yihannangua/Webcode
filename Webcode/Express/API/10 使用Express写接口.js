const express = require("express");

const app = express();
//导入路由模块
const apiRouter = require('./11 apiRouter');

const cors = require('cors');

//配置解析json格式的全局中间件
app.use(express.urlencoded());

//必须在配置cors中间件之前，配置JSONP的接口
app.get('/api/jsonp',(req,res) => {
    //todo:定义 JSONP 接口具体的实现过程
    //获取客户端发送过来的回调函数的名字
    const funcName = req.query.callback;
    //得到要通过JSONP形式发送给客户端的数据
    const data = {
        name: '张三',
        age: 20
    }
    //根据前两步得到的数据，拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    //把上一步拼接得到的字符串，响应给客户端的<script>标签进行执行
    res.send(scriptStr);
})

app.use(cors());

//创建全局中间件，调用路由
app.use('/api',apiRouter);


app.listen(80,() => {
    console.log('服务器已启动，http://127.0.0.1');
})

