import * as KoaRouter from 'koa-router';
import {addProduct, getCategory, getProducts} from "./controllers/products.controller";

const router = new KoaRouter()

// todo 完善增删改查
router.get('/getProducts', getProducts)
router.get('/addProduct', addProduct)
router.get('/getCategory', getCategory)

export default router
