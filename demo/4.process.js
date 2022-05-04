// 1. 资源 cpu 内存

console.log(process.memoryUsage());
console.log(process.cpuUsage());

// 2. 运行环境:运行目录, node 环境 cpu架构, 用户环境 ,系统平台


console.log(process.cwd());
console.log(process.version);
console.log(process.versions);
console.log(process.arch);
console.log(process.env);
// 获取当前环境 * 
console.log(process.env.NODE_ENV);


// 当前平台
// console.log(process.platform);


// 3. 运行状态: 启动参数, PID, 运行时间
console.log(process.argv);
console.log(process.argv0); //arg 0 获取第一个
console.log(process.argv[0]); 
// 所以，我们只要从 process.argv[2] 开始获取就好了

const args = process.argv.slice(2);
console.log(args);// 进程id


console.log(process.pid);// 进程id

console.log(process.uptime());// 从运行开始到现在的时间
setTimeout(()=>{
    console.log(process.uptime());// 从运行开始到现在的时间
},3000)



// node .\4.process.js 1
// node .\4.process.js --a 1 
// var a = args[1]

// 4. 事件监听
// process.on('exit', (code)=>{
//     console.log('exit' + code);
    
// })


// process.on('beforeExit', (code)=>{
//     console.log('beforeExit' + code);

    
// })

// process.exit() // 函数退出

console.log('代码执行完毕');


// 5.标准输入  输出  错误

// console.log = function(data){
//     process.stdout.write('----' + 'data' + '\n')

// };


// console.log(111);
