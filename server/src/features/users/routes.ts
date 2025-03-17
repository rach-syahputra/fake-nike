import express from 'express'

import UserController from './controller'

const router = express.Router()

router.post('/auth/new', UserController.register)
router.post('/auth', UserController.login)

export default router
