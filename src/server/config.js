const env = process.env

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

module.exports = {
  // mongodbUri: 'mongodb://localhost:27017/test',
  env: env.NODE_ENV || 'development',
  port: normalizePort(env.PORT || 8088),
  host: env.HOST || '0.0.0.0',
  get serverUrl () {
    return `http://${this.host}:${this.port}`
  }
}
