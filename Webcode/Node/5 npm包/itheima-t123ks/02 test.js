const itheima = require('../itheima-tools');

// const dtStr = itheima.dataFromat(new Date());
// console.log(dtStr);


const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
const str = itheima.htmlEscape(htmlStr);
console.log(str);

const htmlStr1 = itheima.htmlUnEscape(str);
console.log(htmlStr1);