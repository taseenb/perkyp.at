import React from 'react'
import PropTypes from 'prop-types'

class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      seo: props.seo,
      data: props.data
    }
  }

  render () {
    const seo = this.props.seo
    const data = this.props.data
    const cssClass = data.template === 'base' ? 'base' : null

    return (
      <div
        id={`${seo}`}
        className={`detail ${cssClass}`}
        dangerouslySetInnerHTML={{ __html: this.props.data.detail }}
      />
    )
  }
}

Detail.propTypes = {
  seo: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

module.exports = Detail
