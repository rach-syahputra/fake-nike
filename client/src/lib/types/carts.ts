import { IProductCard, IProductDetail, ISize } from './products'

export interface ICart {
  id: number
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
  id: number
  size: ISize
}
