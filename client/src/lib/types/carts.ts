import { IProductCard, IProductDetail, ISize } from './products'

export interface ICart {
  slug: string
  size: ISize
  count: number
}

export interface ICartContextErrors {
  size: string
}

export interface ICartProductCard extends IProductCard {
  size: ISize
  count: number
}

export interface IUpdateCart extends IProductDetail {
  size: ISize
}

export interface IUpdateCartCount {
  slug: string
  size: ISize
}
