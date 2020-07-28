import * as KoaRouter from 'koa-router';
import {addProduct, deleteProduct, getCategory, getProducts, updateProduct} from "./controllers/products.controller";

const router = new KoaRouter()

router.get('/getProducts', getProducts)
router.get('/addProduct', addProduct)
router.get('/getCategory', getCategory)
router.delete('/deleteByID', deleteProduct)
router.put('/updateProduct', updateProduct)

export default router
