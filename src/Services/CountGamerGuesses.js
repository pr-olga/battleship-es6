'use strict'

import Gamer from '../Model/Gamer/Gamer'

export default class CountGamerGuesses {
  constructor () {
    this.gamer = new Gamer()
  }

  setGuessesToGamer (element) {
    this.gamer.guess.push(element)
  }
}
