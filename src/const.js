const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

const C = {
  baseUrl: (isBrowser ? window.baseUrl : null) || '',
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  isBrowser,
  targetBlank: { rel: 'noopener noreferrer', target: '_blank' }
}

export default C
