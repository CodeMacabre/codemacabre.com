export default {
  buildModules: [
    ['@nuxtjs/fontawesome', {
      icons: {
        solid: ['faEnvelopeOpenText', 'faFolder', 'faFolderOpen', 'faPenNib', 'faUndoAlt'],
        brands: ['faGithub', 'faLinkedin', 'faTwitter']
      }
    }]
  ],
  css: ['~/assets/css/main.css'],
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Web development and design with a touch of the macabre'
      }
    ]
  }
}
