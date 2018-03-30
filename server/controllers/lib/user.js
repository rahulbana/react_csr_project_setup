import User from '../.././models/user'

const userLib = {
  addUser: ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      const user = new User()
      user.name = name
      user.email = email
      user.password = password
      user.save((err, user) => {
        if (!err) {
          resolve(user)
        } else {
          reject(err)
        }
      })
    })
  },
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }, (err, user) => {
        if (!err) {
          resolve(user)
        } else {
          reject(err)
        }
      })
    })
  },
  getUsers: () => {
    return new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        if (!err) {
          resolve(users)
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = {
  userLib
}
