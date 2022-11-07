const express = require("express");

const router = express.Router();


//挂载对应的路由
router.get('/get',(req,res) => {
    //通过 req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;

    res.send({
        status: 0,
        message: '请求成功',
        data: query
    })
})

router.post('/post',(req,res) => {
    const body = req.body;
    res.send({
        status:0,
        message:'请求成功',
        data: body
    })
})


router.delete('/delete',(req,res) => {
    const body = req.body;
    res.send({
        status:0,
        message:'删除成功',
        data: body
    })
})

module.exports = router;
