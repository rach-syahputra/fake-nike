import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router
} from 'express'
import cors from 'cors'

import { PORT } from './config'
import UsersRoute from './features/users/routes'
import ProductsRoute from './features/products/routes'

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.configure()
    this.routes()
  }

  private configure() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes() {
    this.app.use('/api', UsersRoute)
    this.app.use('/api', ProductsRoute)
  }

  start() {
    this.app.listen(PORT, () => {
      console.log('fake-nike API is running on PORT', PORT)
    })
  }
}

export default App
