const fs = require('fs');
const path = require('path');

//\s表示空白字符；\S表示非空白字符；*表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>///匹配style 
const regScript = /<script>[\s\S]*<\/script>///匹配script



fs.readFile('/Users/doit/Downloads/index.html','utf8',function(err,data) {
    if (err) {
        return console.log('读取失败，原因：' + err.message);
    }
    console.log('读取成功，内容：');
    // console.log(data);
    resolveCss(data);
    resolveJS(data);
    resolveHTML(data);
})

//定义处理CSS的方法
function resolveCss(htmlstr) {
    const r1 = regStyle.exec(htmlstr);
    // console.log(r1);
    const newCSS = r1[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'/css/index.css'),newCSS,function(err) {
        if(err) {
            return console.log('写入CSS失败，原因：'+ err.message);
        }
        console.log('写入CSS成功！');
    })
}

//定义处理JS的方法
function resolveJS(htmlstr) {
    const r2 =regScript.exec(htmlstr);
    const newJS = r2[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'/js/index.js'),newJS,function(err) {
        if(err) {
            return console.log('写入JS失败，原因：'+ err.message);
        }
        console.log('写入JS成功！');
    })
}

//定义处理HTML的方法
function resolveHTML(htmlstr) {
    const r3 = htmlstr.replace(regStyle,'<link rel="stylesheet" href="./css/index.css">');
    const r4= r3.replace(regScript,'<script src="./js/index.js"></script>');
    fs.writeFile(path.join(__dirname,'/index.html'),r4,function(err) {
        if(err) {
            return console.log('写入HTML失败，原因：'+ err.message);
        }
        console.log('写入HTML成功！');
    })
}