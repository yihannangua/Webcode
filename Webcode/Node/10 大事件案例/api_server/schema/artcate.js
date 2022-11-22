//导入定义验证规则的包
const joi = require('joi');

//定义用户名和密码的验证规则
const name = joi.string().required();
const alias = joi.string().alphanum().required();


//定义验证文章分类名和类别的规则对象
exports.artcate_schema = {
    body: {
        name,
        alias,
    },
}

const id = joi.number().integer().min(1).required();

exports.deletecate_schema = {
    params: {
        id,
    },
}

exports.getCate_schema = {
    params: {
        id,
    },
}

exports.updateCate_schema = {
    body: {
        id,
        name,
        alias,
    },
}