'use strict'

import Ship from '../Ship'

export default class Cruiser extends Ship {
  constructor () {
    super()
    this.name = 'Cruiser',
    this.amount = 2,
    this.size = 3

    super.createShip()
  }
}
