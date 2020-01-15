module.exports = {
  css: {
    modules: true
  },

  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kpm_publish/'
    : '/'
}