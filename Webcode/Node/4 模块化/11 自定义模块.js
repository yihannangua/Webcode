const age =20;

module.exports.username = 'zs';

module.exports.sayHello = function() {
    console.log('Hello');
}

module.exports.age = age;

//让module.exports指向全新的对象
module.exports ={
    nickname: '小黑',
    sayHi() {
        console.log('Hi');
    }
}