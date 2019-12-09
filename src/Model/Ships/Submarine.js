'use strict'

import Ship from '../Ship'

export default class Submarine extends Ship {
  constructor (amount, size) {
    super(amount, size)
    this.name = 'Submarine'

    super.createShip()
  }
}
