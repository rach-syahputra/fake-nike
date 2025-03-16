export interface Json {
  success: true
  message: string
  error?: {
    message: string
  }
}

export interface Pagination {
  total: number
  cursor: number
}
