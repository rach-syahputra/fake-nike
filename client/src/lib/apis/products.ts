import { API_BASE_URL } from '../constants/api'
import {
  IProductCardJson,
  IProductDetailJson,
  ProductFilter
} from '../types/products'

export const fetchTheLatestAndGreatest =
  async (): Promise<IProductCardJson> => {
    const response = await fetch(
      `${API_BASE_URL}/products/featured/latest-and-greatest`
    )

    return await response.json()
  }

export const fetchGetProducts = async (
  query: string,
  filter?: ProductFilter
): Promise<IProductCardJson> => {
  const params = new URLSearchParams()

  params.append('q', query)

  if (filter?.order) params.append('order', filter.order)
  if (filter?.sortBy) params.append('sortBy', filter.sortBy)
  if (filter?.categories?.length) {
    params.append('categories', filter.categories.join(','))
  }
  if (filter?.sizes?.length) {
    params.append('sizes', filter.sizes.join(','))
  }
  if (filter?.limit) params.append('limit', filter.limit.toString())
  if (filter?.cursor) params.append('cursor', filter.cursor.toString())

  const response = await fetch(`${API_BASE_URL}/products?${params.toString()}`)

  return await response.json()
}

export const fetchGetProductDetail = async ({
  productSlug,
  productStyleSlug
}: {
  productSlug: string
  productStyleSlug: string
}): Promise<IProductDetailJson> => {
  const response = await fetch(
    `${API_BASE_URL}/products/${productSlug}/product-styles/${productStyleSlug}`
  )

  return await response.json()
}

export const fetchGetCartProducts = async (
  productStyleSlugs: string[]
): Promise<IProductCardJson> => {
  const params = new URLSearchParams()

  if (productStyleSlugs.length)
    params.append('slugs', productStyleSlugs.join(','))

  const response = await fetch(
    `${API_BASE_URL}/cart-products?${params.toString()}`
  )

  return await response.json()
}
