
//导入node.js内置的querystrig模块
const qs = require('querystring');


function bodyParser(req,res,next) {
    //定义中间件具体的业务逻辑
    let str = '';
    //监听req对象的data事件
    req.on('data',(chunk) => {
        str += chunk;
    })
    //监听req的end事件
    req.on('end',() => {
        //todo 把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str);
        req.body = body;
        next();
    })
}

module.exports = bodyParser;