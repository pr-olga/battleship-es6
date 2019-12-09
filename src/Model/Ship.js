'use strict'

export default class Ship {
  constructor (amount, size) {
    this.name = 'Ship'
    this.amount = amount
    this.size = size
  }

  createShip () {
    console.log(`A new Ship(s) is(are) on the water: ${this.name}, amount: ${this.amount}, numberCols: ${this.size}`)
  }
}
