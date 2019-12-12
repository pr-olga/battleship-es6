'use strict'

import CountGamerGuesses from '../Services/CountGamerGuesses'
import GenerateLocations from '../Services/GenerateShipLocationsService'
import BattleView from '../View/BattleView'

export default class Battle {
  constructor () {
    this.cells = this._getAllFieldCells()
    this.counter = new CountGamerGuesses()
    this.setLocations = new GenerateLocations().positionShips()
    this.view = new BattleView()
  }

  onInit () {
    return this.view.initLoad(this.setLocations)
  }

  onGamerClick () {
    Array.from(this.cells).forEach(element => {
      element.addEventListener('click',
        () => {
          // add click to gamer guesses
          this.counter.setGuessesToGamer(element)
          // mark on the field
          this.view.markCellAfterClick(this.setLocations)
        })
    })
  }

  _getAllFieldCells () {
    return document.getElementsByClassName('battle-field__field')
  }
}
