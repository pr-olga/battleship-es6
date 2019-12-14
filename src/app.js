'use strict'

import Battle from './Controller/Battle'
import ShipLocs from './Services/GenerateShipLocationsService'

require('./assets/sass/style.scss')

window.onload = new Battle().onInit()

const b = new ShipLocs()
// b.setHits()
/* const a = new BattleShip()
a.hits.push('12')
console.log(a.hits) */
