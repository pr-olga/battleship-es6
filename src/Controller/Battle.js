'use strict'

import CountGamerGuesses from '../Services/CountGamerGuesses'

export default class Battle {
  constructor () {
    this.cells = this._getAllFieldCells()
    this.counter = new CountGamerGuesses()
  }

  onGamerClick () {
    Array.from(this.cells).forEach(element => {
      element.addEventListener('click',
        () => {
          // add click to gamer guesses
          this.counter.setGuessesToGamer(element)
        })
    })
  }

  _getAllFieldCells () {
    return document.getElementsByClassName('battle-field__field')
  }
}
