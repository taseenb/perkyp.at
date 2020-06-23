const env = process.env

export default {
  env: env.NODE_ENV || 'development',
  port: env.PORT || 5000,
  host: env.HOST || '0.0.0.0',
  publicFolder: 'build' // relative to the root where server.js is located
}
