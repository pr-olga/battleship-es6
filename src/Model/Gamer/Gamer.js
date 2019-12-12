'use strict'

export default class Gamer {
  constructor () {
    this._guess = []
  }

  get guess () {
    return this._guess
  }

  set guess (newGuess) {
    this._guess = newGuess
  }
}
