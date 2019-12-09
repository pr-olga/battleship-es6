'use strict'

import Ship from '../Ship'

export default class Battleship extends Ship {
  constructor (amount, numberCols) {
    super(amount, numberCols)
    this.name = 'Battleship'
  }
}
