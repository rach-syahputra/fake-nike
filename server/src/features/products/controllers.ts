import { NextFunction, Request, Response } from 'express'
import ProductsService from './services'

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
}

export default new ProductsController()
