import * as mongoose from "mongoose";

// 定义schema表类型
const productSchema = new mongoose.Schema({
  name: String,   // 名称
  category: String, // 分类
  price: Number,  // 单价
  repertory: Number  // 库存
})

const Product = mongoose.model('Product', productSchema)

// todo 如何把这些全部挂载到ctx上
export default Product
