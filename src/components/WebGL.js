import React from 'react'
import PropTypes from 'prop-types'

class WebGL extends React.Component {
  componentDidMount () {
    // const particles from './webgl/particles');
    // particles('#webgl-canvas');

    // const crossfade from './webgl/crossfade')
    // crossfade('#webgl-canvas')

    // const parametricCurves from './webgl/parametric-curves');
    // parametricCurves('#webgl-canvas', this.context.isMobile);
  }

  render () {
    // console.log(this.context.isMobile);

    return (
      <div id='webgl'>
        <div id='stats' />
        <canvas id='webgl-canvas' />
      </div>
    )
  }
}

WebGL.contextTypes = {
  isBrowser: PropTypes.bool,
  isMobile: PropTypes.bool
}

export default WebGL
