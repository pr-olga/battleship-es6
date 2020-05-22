'use strict'

import Ship from '../Ship'

export default class Destroyer extends Ship {
  constructor () {
    super()
    this._name = 'Destroyer'
    this._amount = 3
    this._size = 2

    super.createShip()
  }
}
