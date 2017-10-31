import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
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

  onRouterChange (e) {
    console.log(e)
  }

  render () {
    return (
      <div>
        <Switch onChange={this.onRouterChange}>
          <Route exact path='/' component={() => <Works works={this.state.works} />} />
          <Route
            path='/work/:seo'
            component={router => (
              <Work
                router={router}
                works={this.state.works}
                isDetail
                isBrowser={this.props.isBrowser}
                isMobile={this.props.isMobile}
              />
            )}
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

module.exports = App
