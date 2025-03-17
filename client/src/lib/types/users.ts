import { Json } from './json'

export interface IRegisterRequest {
  name: string
  email: string
  password: string
}

export interface IRegister {
  id: number
  name: string
  email: string
  createdAt: string
}

export interface IRegisterJson extends Json {
  data: IRegister
}

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginJson extends Json {
  data: {
    accessToken: string
  }
}

export interface IUserToken {
  id: number | string
  name: string
  email: string
  image: string | null
}
