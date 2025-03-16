import jwt from 'jsonwebtoken'

import { IAccessToken } from '../interfaces'
import { JWT_ACCESS_SECRET } from '../config'

export const generateAccessToken = async (data: IAccessToken) => {
  return jwt.sign(data, JWT_ACCESS_SECRET, {
    expiresIn: '1d'
  })
}
