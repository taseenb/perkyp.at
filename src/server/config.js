const env = process.env

module.exports = {
  get env () {
    return env.NODE_ENV || 'development'
  },
  get port () {
    return env.PORT || 8088
  },
  get host () {
    return env.HOST || '0.0.0.0'
  },
  get serverUrl () {
    return `http://${this.host}:${this.port}`
  }
}
