class CheckInputUtils {
  static checkKodeSekolah(string) {
    if (string.length < 6) {
      return false
    }
    return true
  }

  static checkNip(string) {
    if (string.length < 6) {
      return false
    }
    return true
  }

  static checkPassword(string) {
    if (string.length < 6) {
      return false
    }
    return true
  }
}
export default CheckInputUtils
