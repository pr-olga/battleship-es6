'use strict'

import Ship from '../Ship'

export default class Submarine extends Ship {
  constructor () {
    super()
    this._name = 'Submarine'
    this._amount = 4
    this._size = 1

    super.createShip()
  }
}
