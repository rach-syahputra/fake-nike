import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { PORT } from './config'

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.configure()
  }

  private configure() {
    this.app.use(express.json())
  }

  start() {
    this.app.listen(PORT, () => {
      console.log('fake-nike API is running on PORT', PORT)
    })
  }
}

export default App
