'use strict'

import Ship from '../Ship'

export default class Battleship extends Ship {
  constructor (amount, size) {
    super(amount, size)
    this.name = 'Battleship'

    super.createShip()
  }
}
