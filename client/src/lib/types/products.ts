import { Json } from './json'

export interface ITheLatestAndGreatest {
  id: number
  slug: string
  title: string
  category: string
  image: string
  price: number
  createdAt: string
}

export interface ITheLatestAndGreatestJson extends Json {
  data: ITheLatestAndGreatest[]
}
