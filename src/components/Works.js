import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'

const Works = props => (
  <div id='works' className='grid'>
    <div className='inner inner-container'>
      {props.works.map(work => {
        return <Work key={work.uid} {...work} isDetail={false} />
      })}
    </div>
  </div>
)

Works.propTypes = {
  works: PropTypes.array.isRequired
}

module.exports = Works
