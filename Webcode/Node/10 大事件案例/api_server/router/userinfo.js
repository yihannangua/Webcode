//导入express模块
const express = require("express")

//导入路由模块
const router = express.Router();

//导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user');

//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi');

//导入需要的验证规则对象
const { update_userinfo_schema } = require('../schema/user');
const { update_avatar_schema } = require('../schema/user');

//获取用户信息
router.get('/userinfo',user_handler.userInfo);

//更新用户信息
router.post('/userinfo',expressJoi(update_userinfo_schema),user_handler.updateUserInfo);

//更新用户头像
router.post('/update/avatar',expressJoi(update_avatar_schema),user_handler.updateAvatar);

//将路由对象共享出去
module.exports = router;  
