import * as KoaRouter from 'koa-router';
import getProducts from "./controllers/getProducts.controller";

const router = new KoaRouter()

// todo 完善增删改查
router.get('/getProducts', getProducts)

export default router
