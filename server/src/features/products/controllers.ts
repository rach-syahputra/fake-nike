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
      next(error)
    }
  }

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { q, limit, cursor, order, sortBy, categories, sizes } = req.query

      const data = await ProductsService.getProducts({
        q: q?.toString() || '',
        limit: Number(limit),
        cursor: Number(cursor),
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
      next(error)
    }
  }

  async getProductDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { productSlug, productStyleSlug } = req.params
      const data = await ProductsService.getProductDetail({
        productSlug,
        productStyleSlug
      })

      res.status(200).send({
        success: true,
        message: 'Product detail retrieved successfully',
        data
      })
    } catch (error) {
      next(error)
    }
  }

  async getCartProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { slugs } = req.query

      if (!slugs) throw new Error('Product style id(s) is required')

      const data = await ProductsService.getCartProducts(
        slugs
          ? slugs
              .toString()
              .split(',')
              .map((slug) => slug)
          : []
      )

      res.status(200).send({
        success: true,
        message: 'Cart products retrieved successfully',
        data
      })
    } catch (error) {
      next(error)
    }
  }

  async getProductStylePreviews(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { productSlug } = req.params

      if (!productSlug) throw new Error('Product id is required')

      const data = await ProductsService.getProductStylePreviews(productSlug)

      res.status(200).send({
        success: true,
        message: 'Product styles previews retrieved successfully',
        data
      })
    } catch (error) {
      next(error)
    }
  }
}

export default new ProductsController()
