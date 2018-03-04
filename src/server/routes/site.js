const config = require('../config')
const state = require('../state')
const express = require('express')
const debug = require('debug')('app:site')

// Data
// const initialData = require('../../data/initialData')

// React
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const StaticRouter = require('react-router').StaticRouter
const App = require('../../components/App.js')

// Router
const router = express.Router()
router.get('*', (req, res) => {
  const context = {}

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    // Add the requested id if present
    state.requestedId = req.params.id

    // Base url
    const protocol = req.protocol // protocol = http or https
    const hostname = req.headers.host // hostname = 'localhost:8080'
    const path = req.path // pathname = '/MyApp'
    const url = protocol + '://' + hostname + '/'

    // Is it a work?
    const worksNames = state.works.map(w => w.seo)
    let workId = req.url.indexOf('/work/') > -1 ? req.url.replace('/work/', '') : null
    workId = workId && worksNames.indexOf(workId) > -1 ? workId : null
    const workIdx = workId && worksNames.indexOf(workId)
    const workData = workId ? state.works[workIdx] : null

    // Is it a static page?
    const pagesNames = Object.keys(state.pages)
    let pageId = path.replace('/', '')
    pageId = pageId && pagesNames.indexOf(pageId) > -1 ? pageId : null

    // Get the right ogImage
    let ogImage = state.ogImage
    if (workId) {
      ogImage = `assets/work/${workData.seo}/main.jpg`
    } else if (pageId) {
      ogImage = `assets/pages/${pageId}/main.jpg`
    }

    debug(url, workId, pageId, context)

    // Update state with current request
    state.protocol = protocol
    state.hostname = hostname
    state.path = path
    state.url = url
    state.workId = workId
    state.description = workId ? workData.intro : state.ogDescription
    state.workName = workId ? workData.name + ' - ' : ''
    state.pageId = pageId
    state.ogImage = ogImage

    const initialMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App initialData={state} />
      </StaticRouter>
    )

    res.render('index', {
      initialMarkup,
      initialData: state,
      bundle: config.env === 'production' ? 'bundle.min.js' : 'bundle.js',
      styles: config.env === 'production' ? 'style.min.css' : 'style.css'
    })
    res.end()
  }
})

module.exports = router
