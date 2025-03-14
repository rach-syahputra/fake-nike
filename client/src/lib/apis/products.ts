import { BASE_URL } from '../constants/api'
import { ITheLatestAndGreatestJson } from '../types/products'

export const fetchTheLatestAndGreatest =
  async (): Promise<ITheLatestAndGreatestJson> => {
    const response = await fetch(`${BASE_URL}/products/latest-and-greatest`)

    return await response.json()
  }
