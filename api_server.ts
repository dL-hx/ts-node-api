// 需求: 希望有一个服务,可以根据接口请求的内容返回相应数据
import express from 'express'

import {DataStore} from './data'

const list = DataStore.list

// console.log(DataStore.list)

const app = express()

app.get('/', (req,res)=>{
    // res.end('1111')
    res.json(list)

})


app.listen(8080, () => {
    console.log('服务已经开启了')
  })