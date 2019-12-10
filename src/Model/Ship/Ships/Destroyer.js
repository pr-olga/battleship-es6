'use strict'

import Ship from '../Ship'

export default class Destroyer extends Ship {
  constructor () {
    super()
    this.name = 'Destroyer'
    this.amount = 3
    this.size = 2

    super.createShip()
  }
}
