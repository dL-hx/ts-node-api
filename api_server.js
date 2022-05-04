"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 需求: 希望有一个服务,可以根据接口请求的内容返回相应数据
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const list = data_1.DataStore.list;
// console.log(DataStore.list)
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    // res.end('1111')
    res.json(list);
});
app.listen(8080, () => {
    console.log('服务已经开启了');
});
