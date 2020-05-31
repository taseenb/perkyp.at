import config from '../config'
import express from 'express'
import d from 'debug'
import ejs from 'ejs'

// React
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import App from '../../components/App.js'

// Get index.html (also used by create-react-app)
import indexHtmlTemplate from '../../../build/index.html'

const debug = d('app:site')

// Express Router
const router = express.Router()

router.get('*', (req, res) => {
  const context = {}

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
  } else {
    const baseUrl = req.protocol + '://' + req.headers.host

    const initialMarkup = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App isBrowser={false} baseUrl={baseUrl} />
      </StaticRouter>
    )

    // Html head
    const helmet = Helmet.renderStatic()
    let htmlHead = ''
    htmlHead += helmet.title.toString()
    htmlHead += helmet.meta.toString()
    htmlHead += helmet.link.toString()
    htmlHead += `<script>window.baseUrl=${JSON.stringify(baseUrl)};</script>`

    // Render view with EJS (using custom delimiters)
    const ejsOptions = {
      delimiter: '%',
      openDelimiter: '{{',
      closeDelimiter: '}}'
    }
    const template = ejs.compile(indexHtmlTemplate, ejsOptions)
    const html = template({
      htmlHead,
      initialMarkup
    })
    res.set('Content-Type', 'text/html')
    res.send(Buffer.from(html))
  }

  res.end()
})

export default router
