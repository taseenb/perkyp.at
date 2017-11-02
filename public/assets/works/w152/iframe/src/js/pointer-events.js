var PointerEvents = function (el, options) {
  // console.log( el );

  this.options = {
    onStart: options.onStart || function () {},
    onMove: options.onMove || function () {}
  }

  this.el = el || document
  this.pointerX = 0
  this.pointerY = 0

  this.initialize()
}

PointerEvents.prototype = {
  initialize: function () {
    // Touch
    this.el.addEventListener('touchstart', this.onDocumentTouchStart.bind(this), false)
    this.el.addEventListener('touchmove', this.onDocumentTouchMove.bind(this), false)

    // Mouse
    this.mouseMoveCallback = this.onDocumentMouseMove.bind(this)
    this.el.addEventListener('mousedown', this.onMouseDown.bind(this), false)
    this.el.addEventListener('mouseup', this.onMouseUp.bind(this), false)
  },

  onMouseDown: function (e) {
    this.mouseMoveCallback(e)
    this.el.addEventListener('mousemove', this.mouseMoveCallback, false)
  },

  onMouseUp: function (e) {
    this.el.removeEventListener('mousemove', this.mouseMoveCallback, false)
  },

  onDocumentTouchStart: function (event) {
    if (event.touches.length === 1) {
      event.preventDefault()
      this.pointerX = event.touches[0].pageX
      this.pointerY = event.touches[0].pageY

      this.options.onStart(this.pointerX, this.pointerY)
    }
  },

  onDocumentTouchMove: function (event) {
    if (event.touches.length === 1) {
      event.preventDefault()
      this.pointerX = event.touches[0].pageX
      this.pointerY = event.touches[0].pageY
    }

    this.onPointerMove()
  },

  onDocumentMouseMove: function () {
    this.pointerX = event.clientX
    this.pointerY = event.clientY

    this.onPointerMove()
  },

  onPointerMove: function () {
    this.options.onMove(this.pointerX, this.pointerY)
  }
}

module.exports = PointerEvents
