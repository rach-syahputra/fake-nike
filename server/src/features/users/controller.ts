import { NextFunction, Request, Response } from 'express'

import UserService from './services'

class UserController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, image, password } = req.body

      const data = await UserService.register({
        name,
        email,
        image,
        password
      })

      res.status(201).send({
        success: true,
        message: 'User registered successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body

      const data = await UserService.login({
        email,
        password
      })

      res.status(200).send({
        success: true,
        message: 'User logged in successfully',
        data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserController()
