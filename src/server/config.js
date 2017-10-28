const env = process.env

module.exports = {
  // mongodbUri: 'mongodb://localhost:27017/test',
  env: env.NODE_ENV || 'development',
  port: env.PORT || 8088,
  host: env.HOST || '0.0.0.0',
  get serverUrl () {
    return `http://${this.host}:${this.port}`
  }
}
