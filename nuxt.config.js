export default {
  buildModules: [
    ['@nuxtjs/fontawesome', {
      icons: {
        solid: ['faEnvelopeOpenText', 'faFolder', 'faFolderOpen', 'faPenNib', 'faUndoAlt'],
        brands: ['faGithub', 'faLinkedin', 'faTwitter']
      }
    }]
  ],
  css: ['~/assets/css/main.css']
}
