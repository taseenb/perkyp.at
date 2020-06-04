const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const dataDir = path.resolve(__dirname, '../src/data')
const publicDir = path.resolve(__dirname, '../public')

console.log(isDev, process.env.NODE_ENV)

const config = {
  dataDir,
  publicDir,
  fileToOverwrite: `${dataDir}/image-dimensions${isDev ? '-dev' : ''}.js`
}

module.exports = config
