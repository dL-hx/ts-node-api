// console.log(global);

console.log(__filename); //返回执行文件路径
console.log(__dirname); //返回目录
console.log(this); // 默认情况下 this是空对象,和global 并不同

console.log(this == global);// false


(function () {
    console.log(this == global);// true
    
})()

/* 
默认情况下node 会注入如下模块
require('module')
__filename
__dirname
module
exports
*/


