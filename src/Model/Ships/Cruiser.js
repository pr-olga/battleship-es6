'use strict'

import Ship from '../Ship'

export default class Cruiser extends Ship {
  constructor (amount, size) {
    super(amount, size)
    this.name = 'Cruiser'

    super.createShip()
  }
}
