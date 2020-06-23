import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import Card from '../shared/Card'
import Img from '../shared/Img'
import imageDimensions from '../../data/image-dimensions'

function ListItem ({ seo, displayName, preview, intro }) {
  const dimensions = imageDimensions[preview]

  console.log(dimensions)

  return (
    <Link
      to={`/work/${seo}`}
      className='list-item col-12 col-sm-6 col-xl-4 mb-2 mb-md-4'
    >
      <span className='image-wrapper'>
        <Img src={preview} dimensions={dimensions} />
      </span>

      <span className='details'>
        <span className='name'>{displayName}</span>
        <span className='intro'>{intro}</span>
      </span>
    </Link>
  )
}

ListItem.propTypes = {
  seo: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
}

export default ListItem
