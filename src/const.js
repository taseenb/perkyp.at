const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const C = {
  baseUrl: (isBrowser ? window.baseUrl : null) || '',
  isBrowser,
  targetBlank: { rel: 'noopener noreferrer', target: '_blank' }
}

export default C
