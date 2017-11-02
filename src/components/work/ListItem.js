import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ListItem = props => {
  return (
    <Link to={`/work/${props.seo}`} id={`item-${props.seo}`} className='list-item col-12 col-md-6 col-xl-4 mb-2 mb-md-4'>
      <span className='image-wrapper'>
        <img src={`assets/works/${props.seo}/${props.preview}`} />
      </span>

      <span className='details'>
        <span className='name'>{props.name}</span>
        <span className='intro'>{props.intro}</span>
      </span>
    </Link>
  )
}

ListItem.propTypes = {
  seo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
}

module.exports = ListItem
