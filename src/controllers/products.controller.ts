import Product from "../models/product.model";
import {Context, Next} from "koa";

// 查找
export async function getProducts(ctx: Context) {
  const {page, category, keyword} = ctx.query
  console.log(page, category, keyword)
// 查询条件？
  const res = await Product.find();
  const total = await Product.find().countDocuments();
  // console.log(res)
  ctx.body = {
    // todo 如何动态放入code
    errorCode: 0,
    data: {
      list: res,
      total
    }
  }
}

// 新增
export async function addProduct(ctx: Context) {
  const product = new Product({
    name: '苹果',
    category: '水果',
    price: 5,
    repertory: 20
  })

// 查询条件？
  const res = await product.save();
  // console.log(res)
  ctx.body = {
    errorCode: 0,
    data: res
  }
}


export async function getCategory(ctx: Context) {
  const res = await Product.distinct('category')
  ctx.body = {
    errorCode: 0,
    data: res
  }
}
