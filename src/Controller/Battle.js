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
    this.view.initLoad(this.setLocations, this._getAllShipsPositions(this.setLocations))

    Array.from(this.cells).forEach(element => {
      element.addEventListener('click',
        () => {
          const el = element.getAttribute('data-gps')
          // add click to gamer guesses
          this.counter.setGuessesToGamer(el)
          // mark on the field
          this.view.markCellAfterClick(element, this._getAllShipsPositions(this.setLocations))
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
    const arrPos = []
    for (let i = 0; i <= shipsLocations.length; i++) {
      for (const prop in shipsLocations[i]) {
        if (prop === '_position') {
          arrPos.push(shipsLocations[i].position.arrAll)
        }
      }
    }

    return arrPos
  }
}
