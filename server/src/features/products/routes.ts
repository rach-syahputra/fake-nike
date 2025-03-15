import express from 'express'

import ProductsController from './controllers'

const router = express.Router()

router.get('/products', ProductsController.getProducts)
router.get('/products/:productStyleSlug', ProductsController.getProductDetail)
router.get(
  '/products/featured/latest-and-greatest',
  ProductsController.getLatestAndGreatest
)

export default router
