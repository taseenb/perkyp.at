const env = process.env

export default {
  env: env.NODE_ENV || 'development',
  port: env.PORT || 5000,
  // port: 7777, //  process.env.PORT in Heroku is used by NGINX!
  host: env.HOST || '0.0.0.0'
}
