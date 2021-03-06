import works from './data/works'
import pages from './data/pages'
import imageDimensions from './data/image-dimensions'

const data = {
  shared: {
    title: 'Perky Pat',
    metaKeywords:
      'Esteban, Almiron, London, freelance, front end, frontend, begatto kitchen, perky pat, perky pat designs ltd, free lance, developer, javascript, coder, creative, artist, programmer, contractor, three.js, webgl, canvas, senior, installation, interactive, experienced, expert, art, generative, technology, designer, site, website, web, design, site, web development, jquery, html, html5, css, css3, interactive, webdesign, portfolio',
    metaDescription: 'Digital artist, front end developer based in London',
    ogTitle: 'Perky Pat',
    ogDescription: 'Computational design, front end development, visual art',
    ogImage: '/static/main.jpg',
    ogImageDimensions: { height: 1080, width: 1920, type: 'jpg' },
    path: {
      static: '/static',
      works: '/static/work'
    }
  },
  works,
  pages,
  imageDimensions
}

export default data
