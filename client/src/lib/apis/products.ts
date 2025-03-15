import { BASE_URL } from '../constants/api'
import { IProductCardJson, ProductFilter } from '../types/products'

export const fetchTheLatestAndGreatest =
  async (): Promise<IProductCardJson> => {
    const response = await fetch(`${BASE_URL}/products/latest-and-greatest`)

    return await response.json()
  }

export const fetchGetProducts = async (
  query: string,
  filter?: ProductFilter
): Promise<IProductCardJson> => {
  console.log(query, filter)

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

  const response = await fetch(`${BASE_URL}/products?${params.toString()}`)

  return await response.json()
}
