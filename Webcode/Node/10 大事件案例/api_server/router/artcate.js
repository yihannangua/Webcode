const express = require("express");

const router = express.Router();

const artcate_handler = require('../router_handler/artcate');

//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi');

//获取文章分类
router.get('/cates',artcate_handler.getArticleCates);


//导入需要的验证规则对象
const { artcate_schema,deletecate_schema,getCate_schema,updateCate_schema} = require('../schema/artcate');

//新增文章分类
router.post('/addcates',expressJoi(artcate_schema),artcate_handler.addCates);

//根据id删除文章分类
router.get('/deletecate/:id',expressJoi(deletecate_schema),artcate_handler.deleteCate);

//根据id查询文章分类
router.get('/cates/:id',expressJoi(getCate_schema),artcate_handler.getArtCateById);

//根据id更新文章分类
router.post('/updatecate',expressJoi(updateCate_schema),artcate_handler.updateCate);


module.exports = router;