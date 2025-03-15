const BASE_URL = 'https://fake-nike-server.vercel.app'

export const fetchAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`, { cache: 'force-cache' })
  return await res.json()
}

export const fetchProduct = async (id: string) => {
  const res = await fetch(`${BASE_URL}/products?id=${id}&_limit=1`, {
    cache: 'force-cache'
  })
  return await res.json()
}

export const fetchCartProduct = async (ids: string[]) => {
  const params = new URLSearchParams()

  if (ids) {
    ids.forEach((id) => {
      params.append('id', id)
    })

    const res = await fetch(`${BASE_URL}/products?${params.toString()}`, {
      cache: 'force-cache'
    })

    return await res.json()
  }
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

export const fetchAddUserByEmailAndPassword = async ({
  name,
  email,
  password
}: {
  name: string
  email: string
  password: string
}) => {
  const data = {
    name,
    email,
    password,
    id: email,
    image:
      'https://gtzyhzmsbukqrxnztxjc.supabase.co/storage/v1/object/sign/naik-shoes/woman-profile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJuYWlrLXNob2VzL3dvbWFuLXByb2ZpbGUucG5nIiwiaWF0IjoxNzM1MDM5NTE5LCJleHAiOjE3Mzc2MzE1MTl9.59xUWqQto4yDQXzd4843j7472EBwcAW7RctetTe0SQo&t=2024-12-24T11%3A25%3A19.395Z'
  }

  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  return await res.json()
}
