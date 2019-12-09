'use strict'

export default class Ship {
  constructor (amount, numberCols) {
    this.name = 'Ship'
    this.amount = amount
    this.numberCols = numberCols
  }

  createShip () {
    console.log(`A new Ship is on the water: ${this.name}, amount: ${this.amount}, numberCols: ${this.numberCols}`)
  }
}
