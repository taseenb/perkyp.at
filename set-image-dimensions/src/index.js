import path from 'path'
import fs from 'fs-extra'
import imageSize from 'image-size'

import works from '../../src/data/works.js'

/**
 * Node script that reads the dimension of all images in Perky Pat portfolio data directory (works)
 * and creates a file (ES6 module) that can be imported into the application
 *
 * @TODO Add warnings and ask confirmation before overwriting the file
 */

/**
 * Environment
 */
const isDev = process.env.NODE_ENV === 'development'
console.log(isDev, process.env.NODE_ENV)

/**
 * Check paths
 */
const dataDir = path.resolve(__dirname, '../src/data')
const publicDir = path.resolve(__dirname, '../public')
const fileToOverwrite = `${dataDir}/image-dimensions${isDev ? '-dev' : ''}.js`

// const config = require('../config.js')
// console.log(config)

/**
 * Get image dimensions from works[] data in (work).detail.visuals
 */
const imageDimensions = {}
works.forEach(work => {
  const { preview, image, detail, seo } = work

  // Preview
  if (preview) {
    const filename = publicDir + preview
    try {
      const dimensions = imageSize(filename)
      imageDimensions[preview] = dimensions
      // console.log(dimensions)
    } catch (error) {
      console.error('Catched error', error)
    }
  }

  // Image
  if (image) {
    const filename = publicDir + image
    try {
      const dimensions = imageSize(filename)
      imageDimensions[image] = dimensions
      // console.log(dimensions)
    } catch (error) {
      console.error('Catched error', error)
    }
  }

  // Visuals
  const { visuals } = detail
  if (visuals) {
    visuals.forEach(img => {
      if (!img.type || img.type === 'image' || img.type === 'img') {
        const filename = `${publicDir}${img.src}`
        try {
          const dimensions = imageSize(filename)
          imageDimensions[`${img.src}`] = dimensions
        } catch (error) {
          console.error('Catched error', error)
        }
      }
    })
  }
})

/**
 * Generate the code
 */
const code = `const imageDimensions = ${JSON.stringify(imageDimensions)};
export default imageDimensions`

/**
 * Write the file in the data directory
 */
fs.outputFile(fileToOverwrite, code)
  .then(() => fs.readFile(fileToOverwrite, 'utf8'))
  .then(data => {
    // console.log(data)
    console.log(`Evironment: ${isDev ? 'development' : 'production'}`)
    console.log(`File created: ${fileToOverwrite}`)
  })
  .catch(err => {
    console.error(err)
  })
