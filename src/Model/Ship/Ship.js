'use strict'

export default class Ship {
  constructor () {
    this._name = 'Ship'
    this._amount = 0
    this._size = 0
    this._position = []
  }

  get name () {
    return this._name
  }

  set name (newName) {
    this._name = newName
  }

  get amount () {
    return this._amount
  }

  set amount (newAmount) {
    this._amount = newAmount
  }

  get size () {
    return this._size
  }

  set size (newSize) {
    this._size = newSize
  }

  get position () {
    return this._position
  }

  set position (newPosition) {
    this._position = newPosition
  }

  createShip () {
    console.log(`A new Ship(s) is(are) on the water: ${this.name}, amount: ${this.amount}, size: ${this.size}`)
  }
}
