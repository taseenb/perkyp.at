import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './work/ListItem'
import Detail from './work/Detail'

function Work (props) {
  const { isDetail, router, works } = props

  if (isDetail) {
    const seo = router.match.params.seo
    const work = works.find(w => w.seo === seo)

    return <Detail seo={seo} work={work} {...props} />
  } else {
    return <ListItem {...props} />
  }
}

Work.propTypes = {
  isDetail: PropTypes.bool.isRequired,
  router: PropTypes.object,
  works: PropTypes.array
}

export default Work
