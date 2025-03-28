import { prisma } from '../../utils/prisma'
import { RegisterRequest } from './interfaces'

class UserRepository {
  async register({ name, email, image, password }: RegisterRequest) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image,
        password
      }
    })

    return user
  }

  async getUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }
}

export default new UserRepository()
