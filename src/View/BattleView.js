'use strict'

export default class BattleView {
  initLoad (shipsLocations) {
    console.log(shipsLocations)

    this._markPositionsOnField(
      this._getAllFieldCells(),
      this._getAllShipsPositions(shipsLocations)
    )

    console.log('Ships moved to their positions!')

    shipsLocations ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
  }

  markCellAfterClick (shipsLocations) {
    const currentFields = this._getAllShipsPositions(shipsLocations)
    console.log(currentFields)
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

      arrPos.forEach(pos => {
        const arrLength = pos.length
        switch (arrLength) {
          case 4:
            this._addCssClass(pos, cell, element, 'ship--battleship')
            break
          case 3:
            this._addCssClass(pos, cell, element, 'ship--cruiser')
            break
          case 2:
            this._addCssClass(pos, cell, element, 'ship--destroyer')
            break
          case 1:
            this._addCssClass(pos, cell, element, 'ship--submarine')
            break
          default:
            this._addCssClass(pos, cell, element, 'ship')
            break
        }
      })
    })
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
          arrPos.push(shipsLocations[i].position.arrAll)
        }
      }
    }

    return arrPos
  }

  /**
   * Add a css class to a certain html-element
   *
   * @param {Array} pos
   * @param {Array} cell
   * @param {String} el
   * @param {String} cls
   * @returns
   * @memberof BattleView
   */
  _addCssClass (pos, cell, el, cls) {
    if (pos.includes(cell)) {
      return el.classList.add(cls)
    }
  }
}
