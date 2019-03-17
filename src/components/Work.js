import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './work/ListItem'
import Detail from './work/Detail'

class Work extends React.Component {
  render () {
    if (this.props.isDetail) {
      const seo = this.props.router.match.params.seo
      const work = this.props.works.find(w => w.seo === seo)

      return <Detail seo={seo} data={work} {...this.props} />
    } else {
      return <ListItem {...this.props} />
    }
  }
}

Work.propTypes = {
  isDetail: PropTypes.bool.isRequired,
  router: PropTypes.object,
  works: PropTypes.array
}

export default Work
