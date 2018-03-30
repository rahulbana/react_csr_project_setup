import { userLib } from './lib/user'

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password } = req.body
      if (!email || email.trim().length < 1) {
        res.status(400).json({ status: 0, msg: 'email required!' })
      } else if (!name || name.trim().length < 1) {
        res.status(400).json({ status: 0, msg: 'name required!' })
      } else if (!password || password.trim().length < 1) {
        res.status(400).json({ status: 0, msg: 'password required!' })
      } else {
        const oldUser = await userLib.getUserByEmail(email)
        if (!oldUser) {
          const user = await userLib.addUser(req.body)
          if (!user) {
            res.status(500).json({ status: 0, msg: 'not created!' })
          } else {
            res.status(201).json({ status: 1, msg: 'user created!' })
          }
        } else {
          res.status(400).json({ status: 0, msg: 'email already exist!' })
        }
      }
    } catch (err) {
      res.status(500).json({ status: 0, msg: err })
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await userLib.getUsers()
      if (!users) {
        res.status(200).json({ status: 0, msg: 'email already not exist' })
      } else {
        res.status(400).json({ status: 0, msg: 'email already exist' })
      }
      res.status(200).json({ status: 1, data: users })
    } catch (err) {
      res.status(500).json({ status: 0, msg: err })
    }
  }
}

module.exports = {
  userCtrl
}
