//导入数据库操作模块
const db = require('../db/index');

//导入bcyptjs
const bcypt = require('bcryptjs');


//获取文章分类
exports.getArticleCates = (req,res) => {
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc';
    db.query(sql,(err,results) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            msg:'获取文章分类成功',
            date: results,
        })
    })
}

//新增文章分类
exports.addCates = (req,res) => {
    const sql1 = 'select * from ev_article_cate where name=? or alias=?';
    db.query(sql1,[req.body.name,req.body.alias],(err,results) => {
        if (err) return res.cc(err);
        // 分类名称 和 分类别名 都被占用
    if (results.length === 2) return res.cc('分类名称与别名被占用，请更换后重试！')
    if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) return res.cc('分类名称与别名被占用，请更换后重试！')
    // 分类名称 或 分类别名 被占用
    if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试！')
    if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试！')
    })
    const sql2 = 'insert into ev_article_cate set ?';
    db.query(sql2,req.body,(err,results) => {
        if (err) return res.cc(err);
        // SQL 语句执行成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('新增文章分类失败！');

        // 新增文章分类成功
        res.cc('新增文章分类成功！', 0);
    })
}
