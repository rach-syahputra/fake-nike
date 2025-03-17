import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router
} from 'express'
import cors from 'cors'

import { corsOptions, PORT } from './config'
import UsersRoute from './features/users/routes'
import ProductsRoute from './features/products/routes'
import { ResponseError } from './utils/error'

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.configure()
    this.routes()
    this.handleError()
  }

  private configure() {
    this.app.use(cors(corsOptions))
    this.app.options('*', (req, res) => {
      res.header('Access-Control-Allow-Origin', 'https://fakenikex.vercel.app/')
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
      )
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      res.header('Access-Control-Allow-Credentials', 'true')
      res.sendStatus(204)
    })
    this.app.use(express.json())
  }

  private routes() {
    this.app.use('/api', UsersRoute)
    this.app.use('/api', ProductsRoute)
  }

  private handleError() {
    //not found handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({
        message: 'Not Found.'
      })
    })

    //error handler
    this.app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        if (!err) {
          next()
          return
        }

        if (err instanceof ResponseError) {
          res.status(err.code || 500).json({
            success: false,
            error: {
              message: err.message
            }
          })
        } else {
          console.log(err.message)

          res.status(500).json({
            success: false,
            error: {
              message: 'Something went wrong, please try again later',
              originalMessage: err.message
            }
          })
        }
      }
    )
  }

  start() {
    this.app.listen(PORT, () => {
      console.log('fake-nike API is running on PORT', PORT)
    })
  }
}

export default App
