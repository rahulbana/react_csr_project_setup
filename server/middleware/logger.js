export default function logger(req, res, next) {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  console.log(fullUrl)
  next()
}
