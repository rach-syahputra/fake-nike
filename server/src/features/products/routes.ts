import express from 'express'

import ProductsController from './controllers'

const router = express.Router()

router.get(
  '/products/latest-and-greatest',
  ProductsController.getLatestAndGreatest
)

export default router
