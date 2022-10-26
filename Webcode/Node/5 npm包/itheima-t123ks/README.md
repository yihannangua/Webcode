## 安装
```
npm install itheima-tools
```

## 导入
```js
const itheima = require('itheima-tools');
```

## 格式化时间
```js
//调用dataFormat对时间进行格式化
const dtStr = itheima.dataFromat(new Date());
//结果 2022-10-21 12:23:12
console.log(dtStr);
```

## 转义 HTML 中的特殊字符
```js
const str = itheima.htmlEscape(htmlStr);
console.log(str);
```

##  还原 HTML 中的特殊字符
```js
const htmlStr1 = itheima.htmlUnEscape(str);
console.log(htmlStr1);
```

## 开源协议
ISC
