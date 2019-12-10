'use strict'

import Ship from '../Ship'

export default class Battleship extends Ship {
  constructor () {
    super()
    this.name = 'Battleship'
    this.amount = 1
    this.size = 4

    super.createShip()
  }
}
