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
const { update_password_schema} = require('../schema/user');

//获取用户信息
router.get('/userinfo',user_handler.userInfo);

//更新用户信息
router.post('/userinfo',expressJoi(update_userinfo_schema),user_handler.updateUserInfo);

//重置用户密码
router.post('/updatepwd',expressJoi(update_password_schema),user_handler.updatePwd);

//将路由对象共享出去
module.exports = router;  
