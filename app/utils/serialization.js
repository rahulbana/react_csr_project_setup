import transform from 'transform-keys'

// https://github.com/bjoerge/transform-keys#custom-key-transformers
export function camelify(obj) {
  return transform(obj, (key) => {
    return key.replace(/_([a-z])/ig, (_, $1) => {
      return $1.toUpperCase()
    })
  })
}

// https://github.com/bjoerge/transform-keys#custom-key-transformers
export function snakeify(obj) {
  return transform(obj, (key) => {
    return key.replace(/([A-Z])/g, (_, $1) => {
      return '_' + $1.toLowerCase()
    })
  })
}
