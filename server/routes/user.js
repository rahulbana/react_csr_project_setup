import { authUser } from '../middleware/auth'
import { userCtrl } from '../controllers/user'
const userRouter = require('express').Router()

userRouter.get('/', authUser, userCtrl.getAllUsers)
userRouter.post('/register', userCtrl.registerUser)

export default userRouter
