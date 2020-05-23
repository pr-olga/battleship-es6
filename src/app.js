'use strict'

import Battle from './Controller/Battle'
import { validatePositions } from './utlities/positionValidator'

require('./assets/sass/style.scss')

let bat = new Battle();
window.onload = bat.onInit()

if(validatePositions(bat.allPos)){
  location.reload()
}
