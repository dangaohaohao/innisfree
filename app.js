
// 内置模块
// 第三方模块
const express = require('express');
// 自定义模块
let router = require('./router/router');

const app = express();

app.use('/public', express.static('./public'));
app.use(router);

app.listen(3000, '192.168.1.105', (err) => {
  console.log('running in 192.168.1.105:3000');
});
