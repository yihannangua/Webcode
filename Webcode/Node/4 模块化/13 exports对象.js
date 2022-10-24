// console.log(exports);

// console.log(module.exports);

// console.log(exports === module.exports);

const uname = 'zs';

exports.uname = uname;
exports.age = 20;
exports.sayHi = function() {
    console.log('Hi!');
}