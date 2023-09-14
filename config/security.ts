export const security = {
  headers: {
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      'default-src': ['\'self\''],
      'base-uri': ['\'self\''],
      'connect-src': ['\'self\'', 'https:', 'http:', 'wss:', 'ws:'],
      'font-src': ['\'self\''],
      'form-action': ['\'none\''],
      'frame-ancestors': ['\'none\''],
      'img-src': ['\'self\'', 'https:', 'http:', 'data:', 'blob:'],
      'media-src': ['\'self\'', 'https:', 'http:'],
      'object-src': ['\'none\''],
      'script-src': ['\'self\'', '\'unsafe-inline\'', '\'wasm-unsafe-eval\''],
      'script-src-attr': ['\'none\''],
      'style-src': ['\'self\'', '\'unsafe-inline\''],
      'upgrade-insecure-requests': true,
    },
  },
  rateLimiter: {
    tokensPerInterval: 150,
    interval: 'hour',
  },
}
