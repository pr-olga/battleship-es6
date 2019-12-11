'use strict'

import Ship from '../Ship'

export default class Battleship extends Ship {
  constructor () {
    super()
    this._name = 'Battleship'
    this._amount = 1
    this._size = 4

    super.createShip()
  }
}
