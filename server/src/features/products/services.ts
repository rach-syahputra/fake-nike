import { GetProductsRequest } from './interfaces'
import ProductsRepository from './repositories'

class ProductsService {
  async getLatestAndGreatest() {
    return await ProductsRepository.getLatestAndGreatest()
  }

  async getProducts({
    q,
    limit,
    cursor,
    order,
    sortBy,
    categories,
    sizes
  }: GetProductsRequest) {
    return await ProductsRepository.getProducts({
      q,
      limit,
      cursor,

      order,
      sortBy,
      categories,
      sizes
    })
  }

  async getProductDetail(productStyleSlug: string) {
    return await ProductsRepository.getDetailProduct(productStyleSlug)
  }

  async getCartProducts(productStyleIds: number[]) {
    return await ProductsRepository.getCartProducts(productStyleIds)
  }
}

export default new ProductsService()
