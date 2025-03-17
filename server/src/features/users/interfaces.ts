export interface RegisterRequest {
  name: string
  email: string
  image?: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}
