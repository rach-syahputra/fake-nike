import express from 'express'

import ProductsController from './controllers'

const router = express.Router()

router.get('/products', ProductsController.getProducts)
router.get(
  '/products/:productSlug/product-styles/:productStyleSlug',
  ProductsController.getProductDetail
)
router.get(
  '/products/featured/latest-and-greatest',
  ProductsController.getLatestAndGreatest
)
router.get('/cart-products', ProductsController.getCartProducts)
router.get(
  '/products/:productSlug/product-styles/previews',
  ProductsController.getProductStylePreviews
)

export default router
