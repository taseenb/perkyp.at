var imagesLoaded = require('imagesloaded')
var createCover = require('./create-cover')
var PointerEvents = require('./pointer-events')

var w, h // window size
var images = []
var imagesWidth, imagesHeight
var ctx
var canvas
var totalImages = 130
var oneEvery = 2
var imagesAvailable
var imageX, imageY, fillX, fillY
var tween
var cursor
var slider
var cursorWidth = 60
var lastFrame

function updateCanvas (frame) {
  requestAnimationFrame(function () {
    if (frame === lastFrame) return
    lastFrame = frame
    // ctx.clearRect(0, 0, w, h)
    ctx.drawImage(images[frame].img, 0, 0, imagesWidth, imagesHeight, imageX, imageY, fillX, fillY)
  })
}

function preloadImages () {
  var hiddenEl = document.getElementById('hidden-images-preload')
  var imagesHtml = ''
  for (var i = 1; i < totalImages; i += oneEvery) {
    imagesHtml += '<img id="img_' + i + '" src="img/anim/frame_' + i + '.jpg">\n'
  }
  hiddenEl.innerHTML = imagesHtml

  // Load
  imagesLoaded(hiddenEl, onImagesLoaded)
}

function onImagesLoaded (e) {
  images = e.images
  imagesAvailable = images.length - 1
  imagesWidth = images[0].img.width
  imagesHeight = images[0].img.height

  // Set canvas bg with first frame
  var url = images[0].img.src
  canvas.style.backgroundImage = 'url(' + url + ')'

  // Update sizes
  onResize()

  // Init pointer events
  var pointer = new PointerEvents(slider, {
    onStart: onPointerMove,
    onMove: onPointerMove
  })

  // Resize event
  window.addEventListener('resize', onResize, false)

  // Tween
  tween = window.TweenMax.to({ value: 0 }, 4, {
    value: 1,
    ease: Linear.easeNone,
    onUpdate: function () {
      updateCanvas(Math.floor(imagesAvailable * this.target.value))
      updateCursor(this.target.value)
    }
  })
}

function onPointerMove (x, y) {
  if (tween) stopTween()
  var value = x / w
  var frame = Math.floor(imagesAvailable * value)
  updateCursorByX(x)
  updateCanvas(frame)
}

function updateCursor (value) {
  var dist = w - cursorWidth
  window.TweenMax.set(cursor, { x: dist * value })
}

function updateCursorByX (_x) {
  var maxW = w - cursorWidth
  var x = _x - cursorWidth / 2
  x = Math.min(Math.max(x, 0), maxW)
  window.TweenMax.set(cursor, { x: x })
}

function stopTween () {
  tween.pause().kill()
  tween = null

  // slider.removeEventListener('mousedown', stopTween)
}

function onResize () {
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w
  canvas.height = h
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'

  var cover = createCover(w, h, imagesWidth, imagesHeight)

  imageX = cover.left
  imageY = cover.top
  fillX = cover.width
  fillY = cover.height

  console.log(h)
}

function init () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  slider = document.getElementById('slider')
  cursor = document.getElementById('cursor')

  preloadImages()
}

init()
