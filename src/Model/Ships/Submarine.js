'use strict'

import Ship from '../Ship'

export default class Submarine extends Ship {
  constructor () {
    super()
    this.name = 'Submarine'
    this.amount = 4
    this.size = 1

    super.createShip()
  }
}
