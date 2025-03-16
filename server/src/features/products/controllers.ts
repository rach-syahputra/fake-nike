import { NextFunction, Request, Response } from 'express'

import ProductsService from './services'
import { OrderType, SortByType } from './interfaces'

class ProductsController {
  async getLatestAndGreatest(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductsService.getLatestAndGreatest()

      res.status(200).send({
        success: true,
        message: 'The Latest and Greatest retrieved successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { q, limit, order, sortBy, categories, sizes } = req.query

      const data = await ProductsService.getProducts({
        q: q?.toString() || '',
        limit: Number(limit),
        order: order as OrderType,
        sortBy: sortBy as SortByType,
        categories: categories
          ? categories
              ?.toString()
              .split(',')
              .map((category) => Number(category))
          : [],
        sizes: sizes
          ? sizes
              .toString()
              .split(',')
              .map((size) => Number(size))
          : []
      })

      res.status(200).send({
        success: true,
        message: 'Products retrieved successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getProductDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { productStyleSlug } = req.params
      const data = await ProductsService.getProductDetail(productStyleSlug)

      res.status(200).send({
        success: true,
        message: 'Product detail retrieved successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getCartProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { ids } = req.query

      if (!ids) throw new Error('Product style id(s) is required')

      const data = await ProductsService.getCartProducts(
        ids
          ? ids
              .toString()
              .split(',')
              .map((id) => Number(id))
          : []
      )

      res.status(200).send({
        success: true,
        message: 'Cart products retrieved successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ProductsController()
