const baseController = {
  get: (req, res) => {
    res.render('index.html')
  },
  status: (req, res) => {
    res.json({ status: 1, msg: 'jsghjsdg sf sd' })
  }
}

export default baseController
