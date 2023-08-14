class MainLocalStorage {
  static setExample(data) {
    localStorage.setItem('example', JSON.stringify(data))
  }

  static getExample() {
    return JSON.parse(localStorage.getItem('example'))
  }

  static logOut() {
    var keysToPreserve = ['login']
    for (var i = 0; i < sessionStorage.length; i++) {
      var key = sessionStorage.key(i)

      // Check if the current key should be preserved
      if (!keysToPreserve.includes(key)) {
        // Remove the item from Session Storage
        sessionStorage.removeItem(key)
      }
    }
  }

  static clear() {
    localStorage.clear()
  }
}

export default MainLocalStorage
