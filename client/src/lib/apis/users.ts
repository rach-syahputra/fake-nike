import { API_BASE_URL } from '../constants/api'
import {
  ILoginJson,
  ILoginRequest,
  IRegisterJson,
  IRegisterRequest
} from '../types/users'

export const fetchRegister = async ({
  name,
  email,
  password
}: IRegisterRequest): Promise<IRegisterJson> => {
  const response = await fetch(`${API_BASE_URL}/auth/new`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })

  return await response.json()
}

export const fetchLogin = async ({
  email,
  password
}: ILoginRequest): Promise<ILoginJson> => {
  const response = await fetch(`${API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  console.log('aaa')

  return await response.json()
}
