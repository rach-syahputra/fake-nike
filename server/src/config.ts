import { config } from 'dotenv'
import { resolve } from 'path'

// Load .env.local for development mode
const NODE_ENV = process.env.NODE_ENV || 'development'
const envFile = NODE_ENV === 'development' ? '.env.local' : '.env'
config({ path: resolve(__dirname, `../${envFile}`), override: true })

export const PORT = process.env.PORT || 8000

export const JWT_ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || ''
