//导入定义验证规则的包
const joi = require('joi');

//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi.string().required();

//定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
    },
}

// 定义 id, nickname, emial 的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();

//定义验证更新用户信息表单数据的规则对象
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
    },
}

//定义oldpwd,newpwd 的验证规则
const oldpwd = joi.string().required();
const newpwd = joi.string().required();

//定义重置用户密码表单数据的规则对象
exports.update_password_schema = {
    body: {
        id,
        oldpwd,
        newpwd,
    },
}