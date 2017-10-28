const React = require('react')
const PropTypes = require('prop-types')

class WebGL extends React.Component {
  componentDidMount () {
    // const particles = require('./webgl/particles');
    // particles('#webgl-canvas');

    // const crossfade = require('./webgl/crossfade')
    // crossfade('#webgl-canvas')

    // const parametricCurves = require('./webgl/parametric-curves');
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

module.exports = WebGL
