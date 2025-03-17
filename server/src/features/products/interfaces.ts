export type OrderType = 'asc' | 'desc'
export type SortByType = 'date' | 'price'

export interface GetProductsRequest {
  q: string
  limit?: number
  cursor?: number
  order?: OrderType
  sortBy?: SortByType
  categories?: number[]
  sizes?: number[]
}
