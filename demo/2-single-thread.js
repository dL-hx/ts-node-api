// node js 单线程

// 延迟4s后启动服务
function sleepTime(time) {
    const sleep = Date.now() + time * 1000
    while( Date.now() < sleep){}
    return 
}

sleepTime(4)
// 1. http 服务开启

const http = require('http') 

// 2. 发送给客户端的内容
const server = http.createServer((req,res)=>{
    res.end('server starting...')
})

// 3. 开启一个监听端口
server.listen(8080, ()=>{
    console.log('服务已启动');
    
})