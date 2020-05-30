import React from 'react'
import PropTypes from 'prop-types'
import createCover from '../../utils/create-cover'
import VimeoPlayer from '@vimeo/player'

class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      seo: props.seo,
      data: props.data
    }

    this.updatesize = this.updatesize.bind(this)
    this.toggleZoom = this.toggleZoom.bind(this)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updatesize)

    this.disableImageZoom()
    this.removeVimeoEvents()
    this.removeIframeEvents()
  }

  componentDidMount () {
    // Cache DOM elements
    this.el = document.querySelector(`#${this.props.data.seo}`)
    this.$head = this.el.querySelectorAll('.head')
    this.$icons = this.$head.querySelectorAll('.icons')

    // Remove autoplay video on mobile (on iphone they start in fullscreen even if hidden)
    if (this.props.isMobile) {
      const videos = document.querySelectorAll(
        `#${this.props.seo} video[autoplay]`
      )
      videos.forEach(v => v.parentNode.removeChild(v))
    }

    // Add resize and update sizes
    window.addEventListener('resize', this.updatesize)
    this.updatesize()

    // Cache elements
    this.covers = document.querySelectorAll(`#${this.props.seo} .cover`) // fullscreen cover

    // Update sizes for cover elements (if there is any)
    this.updateCovers()

    // Init zoom
    // this.enableImageZoom()

    // Init Vimeo
    this.setupVimeo()

    // Init icons (fullscreen)
    this.setupIcons()
  }

  setupVimeo () {
    const $vimeos = this.el.querySelectorAll('.vimeo-iframe')
    this.players = []

    $vimeos.forEach((el, i) => {
      this.players[i] = new VimeoPlayer(el)
    })

    // Events
    this.players.forEach((player, i) => {
      player.on('play', () => {
        this.players.forEach((p, j) => {
          if (j !== i) p.pause()
        })
      })
    })

    this.updatePlayersSize()
  }

  removeVimeoEvents () {
    if (this.players) {
      this.players.forEach((player, i) => {
        player.off('play')
      })
    }
  }

  setupIcons () {
    // Fullscreen
    this.$icons.forEach($icon => {
      const $fullscreenBtn = $icon.querySelector('.fullscreen-icon')

      $fullscreenBtn.addEventListener('click', e => {
        e.currentTarget.closest('.head').classList.toggle('fullscreen')
      })
    })
  }

  removeIframeEvents () {
    this.$icons.forEach($icon => {
      const $fullscreenBtn = $icon.querySelector('.fullscreen-icon')
      $fullscreenBtn.removeEventListener('click')
    })
  }

  enableImageZoom () {
    const $images = document.querySelectorAll(`#${this.props.seo} .image`)
    this.$images = $images

    $images.forEach($image => {
      if ($image.classList.contains('no-zoom')) return

      if (
        $image.querySelectorAll('.row-zoom').length &&
        $image.querySelectorAll('.col-zoom').length
      ) {
        $image.querySelector('.img').addEventListener('click', this.toggleZoom)
      }
    })
  }

  disableImageZoom () {
    this.$images.forEach($image => {
      $image.removeEventListener('click', this.toggleZoom)
    })
  }

  toggleZoom (e) {
    const $el = e.currentTarget.closest('.image')
    const $row = $el.querySelector('.row-zoom')
    const $col = $el.querySelector('.col-zoom')
    const zoomed = $el.classList.contains('zoomed')

    // Copy the row-zoom and col-zoom classes to a temporary data attribute
    // And copy from data attributes back to the element to restore original size
    if (zoomed) {
      $row.className = ''
      $row.classList.add($el.getAttribute('data-row-zoom'))
      $col.className = ''
      $col.classList.add($el.getAttribute('data-col-zoom'))
      $el.classList.remove('zoomed')
    } else {
      $el.setAttribute('row-zoom', $row.className)
      $el.setAttribute('col-zoom', $col.className)
      $row.className = ''
      $row.classList.add('row-zoom')
      $col.className = ''
      $col.classList.add('col-zoom')
      $el.classList.add('zoomed')
    }
  }

  updateCovers () {
    if (this.covers) {
      this.covers.forEach((el, i) => {
        const $el = el
        const $parent = $el.parentNode
        const w =
          $el.getAttribute('data-width') ||
          el.width ||
          $el.getBoundingClientRect().width // original element width
        const h =
          $el.getAttribute('data-height') ||
          el.height ||
          $el.getBoundingClientRect().height // original element height
        const parentW = $parent.getBoundingClientRect().width
        const parentH = $parent.getBoundingClientRect().height

        // Get cover size and position
        const cover = createCover(parentW, parentH, w, h)

        // Save original size
        $el.setAttribute('data-width', w)
        $el.setAttribute('data-height', h)

        // Apply cover size and position to video element
        $el.style = { ...$el.style, ...cover }

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

  updatePlayersSize () {
    this.players.forEach((player, i) => {
      player.ready().then(() => {
        player.getVideoWidth().then(w => {
          player.getVideoHeight().then(h => {
            const $player = player.element
            const ratio = w / h
            const width = $player.getBoundingClientRect().width
            $player.style.height = width / ratio + 'px'
          })
        })
      })
    })
  }

  updatesize () {
    // $('.head').height(window.innerHeight)

    // Resize vimeos - update height, depending on width
    if (this.players) {
      this.updatePlayersSize()
    }

    if (this.covers) {
      this.updateCovers()
    }
  }

  render () {
    const seo = this.props.seo
    const data = this.props.data
    const cssClass = data.template === 'default' ? 'default' : null
    const __html = this.props.data.detail

    return (
      <div
        id={`${seo}`}
        className={`detail ${cssClass}`}
        dangerouslySetInnerHTML={{ __html }}
      />
    )
  }
}

Detail.propTypes = {
  seo: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Detail
