import { GetProductsRequest } from './interfaces'
import ProductsRepository from './repositories'

class ProductsService {
  async getLatestAndGreatest() {
    return await ProductsRepository.getLatestAndGreatest()
  }

  async getProducts({
    q,
    limit,
    order,
    sortBy,
    categories,
    sizes
  }: GetProductsRequest) {
    return await ProductsRepository.getProducts({
      q,
      limit,
      order,
      sortBy,
      categories,
      sizes
    })
  }
}

export default new ProductsService()
