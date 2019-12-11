'use strict'

import Ship from '../Ship'

export default class Cruiser extends Ship {
  constructor () {
    super()
    this._name = 'Cruiser'
    this._amount = 2
    this._size = 3

    super.createShip()
  }
}
