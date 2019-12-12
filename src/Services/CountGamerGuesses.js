'use strict'

import Gamer from '../Model/Gamer/Gamer'

export default class CountGamerGuesses {
  constructor () {
    this.gamer = new Gamer()
  }

  setGuessesToGamer () {
    const cells = document.getElementsByClassName('battle-field__field')
    Array.from(cells).forEach(element => {
      element.addEventListener('click',
        () => {
          this.gamer.guess.push(element.getAttribute('data-gps'))
          console.log(this.gamer.guess)
        })
    })
  }
}
