'use strict'

import GenerateLocations from '../Services/GenerateShipLocationsService'

export default class BattleView {
  initLoad () {
    const setLocations = new GenerateLocations()
    const shipsLocations = setLocations.positionShips()

    this._markPositionsOnField(
      this._getAllFieldCells(),
      this._getAllShipsPositions(shipsLocations)
    )

    console.log(shipsLocations)
    console.log('Ships moved to their positions!')

    shipsLocations ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
  }

  /**
   * Get all cells of Table
   *
   * @returns
   * @memberof BattleView
   */
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
          arrPos.push(shipsLocations[i].position.begin)
        }
      }
    }

    return arrPos
  }

  /**
   * Visualize positions on field
   *
   * @param {Array} viewFieldElements
   * @param {Array} arrPos
   * @memberof BattleView
   */
  _markPositionsOnField (viewFieldElements, arrPos) {
    Array.from(viewFieldElements).forEach(element => {
      const cell = element.getAttribute('data-gps')
      if (arrPos.includes(cell)) {
        element.classList.add('ship')
      }
    })
  }
}
