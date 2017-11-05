import React from 'react'
import PropTypes from 'prop-types'
import createCover from '../../utils/create-cover'

class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      seo: props.seo,
      data: props.data
    }

    if (this.props.isBrowser) {
      this.updatesize = this.updatesize.bind(this)
      this.toggleZoom = this.toggleZoom.bind(this)
    }
  }

  componentWillUnmount () {
    if (this.props.isBrowser) {
      window.removeEventListener('resize', this.updatesize)

      this.disableZoom()
    }
  }

  componentDidMount () {
    if (this.props.isBrowser) {
      // Remove autoplay video on mobile (on iphone they start in fullscreen even if hidden)
      if (this.props.isMobile) {
        const videos = document.querySelectorAll(`#${this.props.seo} video[autoplay]`)
        videos.forEach(v => v.remove())
      }

      // Add resize and update sizes
      window.addEventListener('resize', this.updatesize)
      this.updatesize()

      // Cache elements
      this.covers = document.querySelectorAll(`#${this.props.seo} .cover`) // fullscreen cover

      // Update sizes for cover elements (if there is any)
      this.updateCovers()

      // Init zoom
      this.enableZoom()
    }
  }

  enableZoom () {
    const $images = $(`#${this.props.seo} .image`)
    this.$images = $images

    $images.each((i, image) => {
      const $image = $(image)

      if ($image.hasClass('no-zoom')) return

      if ($image.find('.row-zoom').length && $image.find('.col-zoom').length) {
        $image.on('click', this.toggleZoom)
      }
    })
  }

  disableZoom () {
    this.$images.off('click', this.toggleZoom)
  }

  toggleZoom (e) {
    const $el = $(e.currentTarget)
    const $row = $el.find('.row-zoom')
    const $col = $el.find('.col-zoom')
    const zoomed = $el.hasClass('zoomed')

    // Copy the row-zoom and col-zoom classes to a temporary data attribute
    // And copy from data attributes back to the element to restore original size
    if (zoomed) {
      $row.removeClass().addClass($el.data('row-zoom'))
      $col.removeClass().addClass($el.data('col-zoom'))
      $el.removeClass('zoomed')
    } else {
      $el.data('row-zoom', $row.attr('class'))
      $el.data('col-zoom', $col.attr('class'))
      $row.removeClass().addClass('row-zoom')
      $col.removeClass().addClass('col-zoom')
      $el.addClass('zoomed')
    }
  }

  updateCovers () {
    if (this.covers) {
      this.covers.forEach((el, i) => {
        const $el = $(el)
        const $parent = $el.parent()
        const w = $el.data('width') || el.width || $el.width() // original element width
        const h = $el.data('height') || el.height || $el.width() // original element height
        const parentW = $parent.width()
        const parentH = $parent.height()

        // Get cover size and position
        const cover = createCover(parentW, parentH, w, h)

        // Save original size
        $el.data('width', w)
        $el.data('height', h)

        // Apply cover size and position to video element
        $el.css(cover)
        if (
          el instanceof HTMLImageElement ||
          el instanceof HTMLVideoElement ||
          el instanceof HTMLCanvasElement
        ) {
          el.width = cover.width
          el.height = cover.height
        }
      })
    }
  }

  updatesize () {
    // $('.head').height(window.innerHeight)

    if (this.covers) {
      this.updateCovers()
    }
  }

  render () {
    const seo = this.props.seo
    const data = this.props.data
    const cssClass = data.template === 'default' ? 'default' : null

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
