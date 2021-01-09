import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import Bio from './pages/Bio'
// import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Works from './Works'
import Detail from './Works/Detail.js'
import Nav from './Nav'
import HtmlHead from './HtmlHead'
import ReqContext from '../context/ReqContext'
import C from '../const'
import data from '../data'

function App ({ baseUrl = C.baseUrl, location }) {
  // const { pathname } = location
  const { works, shared } = data

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ReqContext.Provider value={{ baseUrl }}>
      <HtmlHead data={data} />
      {/* <Works works={works} shared={shared} show={pathname === '/'} /> */}
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Works works={works} shared={shared} />}
        />
        <Route
          path='/work/:seo'
          component={router => {
            const seo = router.match.params.seo
            const work = works.find(w => w.seo === seo)

            if (work) {
              return <Detail {...work} shared={shared} isDetail />
            } else {
              return <NotFound />
            }
          }}
        />
        <Route exact path='/bio' component={Bio} />
        <Route component={NotFound} />
      </Switch>
      <Nav />
    </ReqContext.Provider>
  )
}

export default withRouter(App)
