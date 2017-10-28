const React = require('react')

const Bio = props => (
  <div id='bio' className='page' dangerouslySetInnerHTML={{ __html: props.html }} />
)

module.exports = Bio
