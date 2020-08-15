import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faEnvelopeOpenText as freeFasFaEnvelopeOpenText,
  faFolder as freeFasFaFolder,
  faFolderOpen as freeFasFaFolderOpen,
  faPenNib as freeFasFaPenNib,
  faUndoAlt as freeFasFaUndoAlt
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub as freeFabFaGithub,
  faLinkedin as freeFabFaLinkedin,
  faTwitter as freeFabFaTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaEnvelopeOpenText,
  freeFasFaFolder,
  freeFasFaFolderOpen,
  freeFasFaPenNib,
  freeFasFaUndoAlt,
  freeFabFaGithub,
  freeFabFaLinkedin,
  freeFabFaTwitter
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
