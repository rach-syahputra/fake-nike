import { ResponseError } from '../../utils/error'
import {
  CheckProductStyleOwnershipRequest,
  GetProductDetailRequest,
  GetProductsRequest
} from './interfaces'
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

  async getProductDetail({
    productSlug,
    productStyleSlug
  }: GetProductDetailRequest) {
    await this.checkProductStyleOwnership({ productSlug, productStyleSlug })

    const product = await ProductsRepository.getProductDetail({
      productSlug,
      productStyleSlug
    })

    if (!product) throw new ResponseError(404, 'Product not found')

    return product
  }

  async getCartProducts(productStyleSlugs: string[]) {
    return await ProductsRepository.getCartProducts(productStyleSlugs)
  }

  async getProductStylePreviews(productSlug: string) {
    return await ProductsRepository.getProductStylePreviews(productSlug)
  }

  async checkProductStyleOwnership({
    productSlug,
    productStyleSlug
  }: CheckProductStyleOwnershipRequest) {
    const product = await ProductsRepository.checkProductStyleOwnership({
      productSlug,
      productStyleSlug
    })

    if (!product) {
      throw new ResponseError(404, 'Product style not found')
    }

    if (product?.slug !== productSlug) {
      throw new ResponseError(
        400,
        "Product style doesn't belong to the product"
      )
    }
  }
}

export default new ProductsService()
