import React from 'react'

const Bio = props => (
  <div id='bio' className='page' dangerouslySetInnerHTML={{ __html: props.html }} />
)

export default Bio
