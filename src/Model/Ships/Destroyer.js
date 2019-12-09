'use strict'

import Ship from '../Ship'

export default class Destroyer extends Ship {
  constructor (amount, size) {
    super(amount, size)
    this.name = 'Destroyer'

    super.createShip()
  }
}
