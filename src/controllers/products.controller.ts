import Product from "../models/product.model";
import {Context, Next} from "koa";

// 查找
export async function getProducts(ctx: Context) {
  const {page, category, keyword, size} = ctx.query
  console.log(page, category, keyword, size)
  const pageSize = +size || 10   // 此处必须要是数字，字符串会报错

  const conditions = {
    category: new RegExp(category),
    // 这里必须要是用构造函数，使用字面量创造正则变量不会被解析
    name: new RegExp(keyword, 'i')
  }

  const res = await Product.find(conditions).skip((page - 1) * pageSize).limit(pageSize);
  // todo 获取total数量，有没有其他办法？这样会不会查两遍？
  const total = await Product.countDocuments(conditions);
  // console.log(res)
  ctx.body = {
    // todo 如何动态放入code
    errorCode: 0,
    data: {
      list: res,
      total,
      size: pageSize
    }
  }
}

// 新增
export async function addProduct(ctx: Context) {
  const product = new Product(randomProduct())

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

// 删除
export async function deleteProduct(ctx: Context) {
  const {id} = ctx.query
  const res = await Product.deleteOne({_id: id})
  ctx.body = {
    errorCode: 0,
    data: res
  }
}

// 更新
export async function updateProduct(ctx: Context) {
  const {id} = ctx.query
  const res = await Product.updateOne({_id: id}, {
    repertory: 0
  })
  ctx.body = {
    errorCode: 0,
    data: res
  }
}

// 返回随机商品
function randomProduct() {
  const ten: any = (Math.random() * 10).toFixed();
  const categories = ['水果', '蔬菜', '文具', '海鲜', '零食', '服饰', '酒水', '烟草', '书籍', '纸巾', '护肤']
  return {
    name: '商品' + (Math.random() * 1000000).toFixed(),
    category: categories[ten],
    price: (Math.random() * 100).toFixed(),
    repertory: (Math.random() * 1000).toFixed()
  }
}
