import { ResponseError } from '../../utils/error'
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
    const product = await ProductsRepository.getDetailProduct(productStyleSlug)

    if (!product) throw new ResponseError(404, 'Product not found')

    return product
  }

  async getCartProducts(productStyleIds: number[]) {
    return await ProductsRepository.getCartProducts(productStyleIds)
  }
}

export default new ProductsService()
