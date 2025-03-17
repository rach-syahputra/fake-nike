import bcrypt from 'bcrypt'

import { generateHashedPassword } from '../../utils/bcrypt'
import { generateAccessToken } from '../../utils/jwt'
import { LoginRequest, RegisterRequest } from './interfaces'
import UserRepository from './repositories'
import { ResponseError } from '../../utils/error'

class UserService {
  async register({ name, email, image, password }: RegisterRequest) {
    const hashedPassword = await generateHashedPassword(password)
    const user = await UserRepository.register({
      name,
      email,
      image,
      password: hashedPassword
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      createdAt: user.createdAt
    }
  }

  async login({ email, password }: LoginRequest) {
    const user = await UserRepository.getUserByEmail(email)

    const isPasswordMatch = await bcrypt.compare(password, user?.password || '')

    if (!isPasswordMatch) throw new ResponseError(400, 'Invalid credentials')

    const accessToken = await generateAccessToken({
      id: user?.id!,
      email: user?.email!,
      name: user?.name!,
      image: user?.image!
    })

    return {
      accessToken
    }
  }
}

export default new UserService()
