import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Bio from './pages/Bio'
import NotFound from './pages/NotFound'
import Works from './Works'
import Work from './Work'
import Nav from './Nav'
import HtmlHead from './HtmlHead'
import ReqContext from '../context/ReqContext'

import C from '../const'

import { withRouter } from 'react-router'

import data from '../data'

function App ({ baseUrl = C.baseUrl }) {
  const location = useLocation()
  const { works } = data
  const worksSeo = works.map(w => w.seo)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ReqContext.Provider value={{ baseUrl }}>
      <HtmlHead data={data} />
      <Switch>
        <Route exact path='/' component={() => <Works works={works} />} />
        <Route
          path='/work/:seo'
          component={router => {
            const selectedWork = router.match.params.seo

            if (worksSeo.indexOf(selectedWork) > -1) {
              return <Work router={router} works={works} isDetail />
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
