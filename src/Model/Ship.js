'use strict'

export default class Ship {
  constructor () {
    this.name = 'Ship'
    this.amount = 0
    this.size = 0
  }

  createShip () {
    console.log(`A new Ship(s) is(are) on the water: ${this.name}, amount: ${this.amount}, numberCols: ${this.size}`)
  }
}
