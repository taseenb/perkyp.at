var imagesLoaded = require('imagesloaded')

var w, h // window size
var images = []
var imagesWidth, imagesHeight
var ctx,
  canvas,
  currentFrame = 0
var totalImages = 162,
  oneEvery = 2,
  imagesAvailable
var imageX, imageY, fillX, fillY
var range
var tween

function onChange (e) {
  var value = parseFloat(e.target.value)
  currentFrame = Math.floor(imagesAvailable * value)

  updateCanvas(currentFrame)
}

function updateCanvas (frame) {
  requestAnimationFrame(function () {
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

  // Activate range slider
  initRangeSlider()

  // Resize event
  window.addEventListener('resize', onResize, false)

  // Tween
  tween = window.TweenLite.to(range, 4, {
    value: 1,
    ease: Linear.easeNone,
    onUpdate: function () {
      updateCanvas(Math.floor(imagesAvailable * this.target.value))
    }
  })
}

function initRangeSlider () {
  range = document.getElementById('range')
  range.addEventListener('mousedown', stopTween)
  range.addEventListener('change', onChange)
  range.addEventListener('input', onChange)
}

function stopTween () {
  tween.pause().kill()
  tween = null

  range.removeEventListener('mousedown', stopTween)
}

function createCover (w, h) {
  var winW = window.innerWidth
  var winH = window.innerHeight
  var screenRatio = winW / winH
  var imgRatio = w / h
  var zoomRatio, newWidth, newHeight

  if (screenRatio > imgRatio) {
    // fill width
    zoomRatio = winW / w
    newHeight = ~~(h * zoomRatio)
    imageX = 0
    imageY = ~~((winH - newHeight) / 2)
    fillX = winW
    fillY = newHeight
  } else {
    // fill height
    zoomRatio = winH / h
    newWidth = ~~(w * zoomRatio)
    imageY = 0
    imageX = ~~((winW - newWidth) / 2)
    fillX = newWidth
    fillY = winH
  }

  // HACK for portrait tablet/ipad
  // make the video higher and move down to hide the native Webkit control bar
  // if (touch && width <= height && options.video) {
  //    imageY += 50;
  //    fillY += 50;
  // }
}

function onResize () {
  w = window.innerWidth
  h = window.innerHeight
  canvas.width = w
  canvas.height = h
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'

  console.log(w, h)
  createCover(imagesWidth, imagesHeight)
}

function init () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')

  preloadImages()
}

init()
