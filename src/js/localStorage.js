export default {
  setStorage (value, field) {
    if (!value && !field) return
    localStorage.setItem(`${field}`, JSON.stringify(value))
  },

  clearStorage (value, field) {
    if (!value && !field) return
    localStorage.removeItem(`${field}`)
  },

  getStorage (field) {
    if (!field) return
    return JSON.parse(localStorage.getItem(`${field}`))
  }
}
