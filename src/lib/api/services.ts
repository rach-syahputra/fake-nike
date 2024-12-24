const BASE_URL = 'https://fake-nike-server.vercel.app'

export const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: 'force-cache' })
  return await res.json()
}

export const fetchGreatestPoducts = async (
  order: 'asc' | 'desc' = 'asc',
  limit: number = 10
) => {
  const res = await fetch(
    `${BASE_URL}/products?_sort=price&_order=${order}&_limit=${limit.toString()}`,
    { cache: 'force-cache' }
  )

  return await res.json()
}

export const fetchProductByName = async (query: string, limit: number = 5) => {
  const res = await fetch(
    `${BASE_URL}/products?name_like=${query}&_limit=${limit.toString()}`,
    { cache: 'force-cache' }
  )

  return await res.json()
}

export const fetchUserByEmailAndPassword = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  const res = await fetch(
    `${BASE_URL}/users?email=${email}&password=${password}`,
    {
      method: 'GET',
      next: {
        revalidate: 0
      }
    }
  )

  return await res.json()
}
