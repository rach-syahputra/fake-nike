import bcrypt from 'bcrypt'

import { generateHashedPassword } from '../../utils/bcrypt'
import { LoginRequest, RegisterRequest } from './interfaces'
import UserRepository from './repositories'
import { generateAccessToken } from '../../utils/jwt'

class UserService {
  async register({ name, email, password }: RegisterRequest) {
    const hashedPassword = await generateHashedPassword(password)
    const user = await UserRepository.register({
      name,
      email,
      password: hashedPassword
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    }
  }

  async login({ email, password }: LoginRequest) {
    const user = await UserRepository.getUserByEmail(email)

    const isPasswordMatch = await bcrypt.compare(password, user?.password || '')

    if (!isPasswordMatch) throw new Error('Invalid credentials')

    const accessToken = await generateAccessToken({
      id: user?.id!,
      email: user?.email!,
      name: user?.name!
    })

    return {
      accessToken
    }
  }
}

export default new UserService()
