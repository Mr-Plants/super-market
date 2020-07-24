import {mongo} from "mongoose";
import * as Koa from 'koa'
import config from "./config/config";
import router from "./route";

const app = new Koa()
app.use(router.routes()).use(router.allowedMethods())

const main = async () => {
  await mongo.connect(config.url, {useUnifiedTopology: true})

  app.listen(config.port, () => {
    console.log('app listening port ' + config.port)
  })
}

main()


// todo tsconfig  参考video
// todo tsc自动化编译  参考video
// todo 根据接口自动生成接口文档  参考video
