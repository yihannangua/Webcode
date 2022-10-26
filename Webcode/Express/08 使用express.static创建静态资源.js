const express = require('express');

const app = express();


//调用expre.static对外提供静态资源
app.use(express.static('./clock'));


app.listen(80,() => {
    console.log('启动成功');
})