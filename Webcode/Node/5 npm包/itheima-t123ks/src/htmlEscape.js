//3.定义转义HTML的方法
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g,match => {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case '&': return '&amp;';
        }
    })
}

//4.定义还原HTML的方法
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot|&amp;/g,match => {
        switch (match) {
            case '&lt;': return '<';
            case '&gt;': return '>';
            case '&quot;': return '"';
            case '&amp;': return '&';
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}