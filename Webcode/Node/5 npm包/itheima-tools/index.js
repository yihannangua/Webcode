//这是包的入口文件
//1.定义格式化时间的方法
function dataFromat(dtStr) {
    const dt = new Date(dtStr);

    const y = dt.getFullYear();
    const m = padZero(dt.getMonth() + 1);
    const d = padZero(dt.getDate());

    const hh = padZero(dt.getHours());
    const mm = padZero(dt.getMinutes());
    const ss = padZero(dt.getSeconds());
    
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;

}

//2.定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

module.exports = {
    dataFromat
}