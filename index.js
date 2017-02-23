const error = key => new Error(`Object does not contain ${key}`)
module.exports = object => new Proxy(object, {
  get: (object, key) => {
    if (key in object) {
      return object[key]
    } else {
      throw error(key)
    }
  }
})
