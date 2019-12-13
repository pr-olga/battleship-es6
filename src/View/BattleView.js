'use strict'

export default class BattleView {
  initLoad (shipsLocations, getAllShipsPositions) {
    // console.log(shipsLocations)

    this._markPositionsOnField(
      this._getAllFieldCells(),
      getAllShipsPositions
    )

    console.log('Ships moved to their positions!')

    shipsLocations ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
  }

  markCellAfterClick (el, getAllShipsPositions) {
    const element = el.getAttribute('data-gps')
    const currentFields = getAllShipsPositions
    let miss = true

    for (const field of currentFields) {
      if (field.includes(element)) {
        el.classList.add('hit')
        miss = false
        break
      }
    }

    if (miss) {
      el.classList.add('miss')
    }
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
