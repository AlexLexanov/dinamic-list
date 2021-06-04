import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faHome as freeFasFaHome,
  faHeart as freeFasFaHeart,
  faChevronDown as freeFasFaChevronDown,
  faPlay as freeFasFaPlay,
  faPause as freeFasFaPause,
  faPhone as freeFasFaPhone
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaHome,
  freeFasFaHeart,
  freeFasFaChevronDown,
  freeFasFaPlay,
  freeFasFaPause,
  freeFasFaPhone
)

config.autoAddCss = false

Vue.component('Fa', FontAwesomeIcon)
Vue.component('FaLayers', FontAwesomeLayers)
Vue.component('FaLayersText', FontAwesomeLayersText)
