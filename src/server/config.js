const env = process.env

module.exports = {
  env: env.NODE_ENV || 'development',
  // port: env.PORT || 7777,
  port: 7777, //  process.env.PORT in Heroku is used by NGINX!
  host: env.HOST || '0.0.0.0'
}
