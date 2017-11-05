const env = process.env

module.exports = {
  env: env.NODE_ENV || 'development',
  port: env.PORT || 7777,
  host: env.HOST || '0.0.0.0'
}
