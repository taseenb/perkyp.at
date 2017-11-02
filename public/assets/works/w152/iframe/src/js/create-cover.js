/**
 * Return position and size of element to cover the entire space of the parent.
 * Emulates css background-size: cover (but works with images, video or any dom element)
 */
var createCover = function (parentW, parentH, w, h) {
  var parentRatio = parentW / parentH
  var ratio = w / h
  var zoomRatio
  var top, left, width, height

  if (parentRatio > ratio) {
    // fill width
    zoomRatio = parentW / w
    height = ~~(h * zoomRatio)
    top = ~~((parentH - height) / 2)
    left = 0
    width = parentW
  } else {
    // fill height
    zoomRatio = parentH / h
    width = ~~(w * zoomRatio)
    left = ~~((parentW - width) / 2)
    top = 0
    height = parentH
  }

  return {
    top: top,
    left: left,
    width: width,
    height: height
  }
}

module.exports = createCover
