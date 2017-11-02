/**
 * Return position and size of element to cover the entire space of the parent.
 * Emulates css background-size: cover (but works with images, video or any dom element)
 */
const createCover = (parentW, parentH, w, h) => {
  const parentRatio = parentW / parentH
  const ratio = w / h
  let zoomRatio
  let top, left, width, height

  if (parentRatio > ratio) {
    // fill width
    console.log('fill width')
    zoomRatio = parentW / w
    height = ~~(h * zoomRatio)
    top = ~~((parentH - height) / 2)
    left = 0
    width = parentW
  } else {
    // fill height
    console.log('fill height')
    zoomRatio = parentH / h
    width = ~~(w * zoomRatio)
    left = ~~((parentW - width) / 2)
    top = 0
    height = parentH
  }

  return {
    top,
    left,
    width,
    height
  }
}

module.exports = createCover
