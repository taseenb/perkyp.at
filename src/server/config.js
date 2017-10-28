const env = process.env

console.log(process.env)

module.exports = {
  // mongodbUri: 'mongodb://localhost:27017/test',
  env: env.NODE_ENV || 'development',
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl () {
    return `http://${this.host}:${this.port}`
  }
}
