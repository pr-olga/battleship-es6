'use strict'

import Battle from './Controller/Battle'
import ShipLocs from './Services/GenerateShipLocationsService'

require('./assets/sass/style.scss')

window.onload = new Battle().onInit()
