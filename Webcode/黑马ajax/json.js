function turnstr (obj) {
        var arr = [];
        for (var k in obj) {
            console.log(k);
            console.log(obj[k]);
            var str = k + '=' + obj[k];
            console.log(str);
            arr.push(str);
        }
        console.log(arr);
        return arr.join('&');
}

var obj = {name: 'zs',age: 21};
console.log(turnstr(obj));