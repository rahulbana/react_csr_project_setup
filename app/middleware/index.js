export function interceptor() {
  return async (nextState, replace, callback)=> {
    callback()
    return true
  }
}
