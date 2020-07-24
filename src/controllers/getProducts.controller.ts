import * as Application from "koa";

export default function getProducts(ctx: Application.ParameterizedContext, next: Application.Next) {
  ctx.body = 'hello-world ~~~'

}
