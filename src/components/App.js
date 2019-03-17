import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Bio from './pages/Bio'
import NotFound from './pages/404'
import Works from './Works'
import Work from './Work'
import Nav from './Nav'

class App extends React.Component {
  constructor (props) {
    super(props)

    props.initialData.isBrowser = props.isBrowser || false
    props.initialData.isMobile = props.isMobile || false

    this.state = props.initialData
  }

  onResize () {
    // this.setState({
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // });
  }

  componentDidUpdate (prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged()
    }
  }

  onRouteChanged () {
    if (this.props.isBrowser) {
      // Scroll to top
      window.scrollTo(0, 0)
    }
  }

  render () {
    const worksSeo = this.state.works.map(w => w.seo)

    return (
      <div>
        <Switch onChange={this.onRouterChange}>
          <Route exact path='/' component={() => <Works works={this.state.works} />} />
          <Route
            path='/work/:seo'
            component={router => {
              const requestedWork = router.match.params.seo

              if (worksSeo.indexOf(requestedWork) > -1) {
                return (
                  <Work
                    router={router}
                    works={this.state.works}
                    isDetail
                    isBrowser={this.props.isBrowser}
                    isMobile={this.props.isMobile}
                  />
                )
              } else {
                return <NotFound />
              }
            }}
          />
          <Route exact path='/bio' component={() => <Bio html={this.state.pages.bio} />} />
          <Route component={NotFound} />
        </Switch>
        <Nav contactHtml={this.state.pages.contact} />
      </div>
    )
  }
}

App.propTypes = {
  initialData: PropTypes.object.isRequired
}

export default withRouter(App)
