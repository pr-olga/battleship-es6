'use strict'

export default class Ship {
  constructor () {
    this.name = 'Ship'
    this.amount = 0
    this.size = 0
    this.position = []
  }

  positionShip () {
    const posBegin = Math.floor(Math.random() * 10) + 1
    let posEnd = posBegin + this.size

    if (posEnd > 10) {
      posEnd = posBegin - this.size
    }

    this.position = [posBegin, posEnd]

    return this.position
  }

  createShip () {
    console.log(`A new Ship(s) is(are) on the water: ${this.name}, amount: ${this.amount}, numberCols: ${this.size}, position: ${this.positionShip()}`)
  }
}
