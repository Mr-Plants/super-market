import * as mongoose from "mongoose";
import * as Koa from 'koa'
import config from "./config/config";
import router from "./route";
import * as serve from "koa-static";

const app = new Koa()

app.use(router.routes()).use(router.allowedMethods())

app.use(serve('static'))

const main = async () => {
  // todo 把mongoose提取出一个单独配置文件
  await mongoose.connect(config.url, {useUnifiedTopology: true, useNewUrlParser: true})

//   mongoose.connection.on('connected', function () {
//     console.log('Mongoose default connection open to ' + 3000);
//   });
//
// // MongoDB连接出错后回调，这里仅输出一行日志
//   mongoose.connection.on('error', function (err) {
//     console.log('Mongoose default connection error: ' + err);
//   });
//
// // MongoDB连接断开后回调，这里仅输出一行日志
//   mongoose.connection.on('disconnected', function () {
//     console.log('Mongoose default connection disconnected');
//   });

  app.listen(config.port, () => {
    console.log('app listening port ' + config.port)
  })

  app.on('error', err => {
    console.log(err)
  })
}

main()


// todo tsconfig  参考video
// todo tsc自动化编译  参考video
// todo 根据接口自动生成接口文档  参考video
