'use strict'

import CountGamerGuesses from '../Services/CountGamerGuesses'
import GenerateLocations from '../Services/GenerateShipLocationsService'
import BattleView from '../View/BattleView'

export default class Battle {
  constructor () {
    this.cells = this._getAllFieldCells()
    this.counter = new CountGamerGuesses()
    this.setLocations = new GenerateLocations()
    this.pos = this.setLocations.setShipsToPositions()
    this.allPos = this.setLocations.validator
    this.view = new BattleView()
  }

  onInit () {
    this.view.initLoad(this.setLocations, this._getAllShipsPositions(this.pos))

    Array.from(this.cells).forEach(element => {
      element.addEventListener('click',
        () => {
          const el = element.getAttribute('data-gps')
          // add click to gamer guesses
          this.counter.setGuessesToGamer(el)
          // add to the ship props
          this.setLocations.setHits(el)
          // mark on the field
          this.view.markCellAfterClick(element, this._getAllShipsPositions(this.pos))
        })
    })
  }

  _getAllFieldCells () {
    return document.getElementsByClassName('battle-field__field')
  }

  /**
   * Get all current positions of ships
   *
   * @param {Array} shipsLocations
   * @returns
   * @memberof BattleView
   */
  _getAllShipsPositions (shipsLocations) {
    return shipsLocations.map(i => i._position.arrAll)
  }
}