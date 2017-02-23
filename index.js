module.exports = function (object) {
  return new Proxy(object, {
    get: function (object, key) {
      if (key in object) {
        return object[key]
      } else {
        throw new Error('Object does not contain ' + key)
      }
    }
  })
}
