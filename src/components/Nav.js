import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      current: '',
      open: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  componentDidMount () {
    // Render email address
    const emailLink = $('.rj4kj325jn88dJ3HwwlP')[0]
    if (emailLink) {
      let email = emailLink.rel.replace('/', '@').replace('*', '.')
      const part = ['m', 'a', 'i', 'l', 't', 'o', ':']
      emailLink.href = part.join('') + email
      $(emailLink).text(email)
    }
  }

  toggleNav () {
    this.setState({
      open: !this.state.open
    })
  }

  updateBackClass (path) {
    return path === '/' ? 'hide' : ''
  }

  render () {
    const { location, contactHtml } = this.props
    const path = location.pathname

    const btnClasses = ' py-1 px-1 py-md-2 px-md-1 svg-wrapper'

    return (
      <nav id='nav' className={this.state.open ? 'open' : null}>
        <div className='ui d-flex justify-content-end py-1 px-1 py-md-2 px-md-2'>
          <Link
            className={this.updateBackClass(path) + btnClasses + ' back'}
            to='/'
          >
            <svg
              className='svg-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 50 50'
            >
              <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />
            </svg>
          </Link>
          <div className={btnClasses + ' switch'} onClick={this.toggleNav}>
            <svg
              className='svg-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 50 50'
            >
              <path d='M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' />
            </svg>
          </div>
        </div>

        <div className='popup' onClick={this.toggleNav}>
          <div className='row no-gutters py-md-4 px-md-4 px-2 py-2'>
            <div className='col-12 col-md-8'>
              <Link className='link' to='/'>
                Work
              </Link>
              <Link className='link' to='/bio'>
                Bio
              </Link>
              <div
                className='contact'
                dangerouslySetInnerHTML={{ __html: contactHtml }}
              />
            </div>
          </div>
        </div>

        <div className='cover' onClick={this.toggleNav} />
      </nav>
    )
  }
}

export default withRouter(Nav)
