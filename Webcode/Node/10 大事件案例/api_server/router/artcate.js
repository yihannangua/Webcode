const express = require("express");

const router = express.Router();

const artcate_handler = require('../router_handler/artcate');

//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi');

//获取文章分类
router.get('/cates',artcate_handler.getArticleCates);


//导入需要的验证规则对象
const { artcate_schema } = require('../schema/artcate');

//新增文章分类
router.post('/addcates',expressJoi(artcate_schema),artcate_handler.addCates);

module.exports = router;