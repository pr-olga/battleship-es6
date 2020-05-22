'use strict'

export default class Positions {
  constructor () {
    this.amountOfShips = 4
    this.row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.positions = [{'begin': [], 'end': [], 'arrAll': []}]
  }

  /**
 * Generate begining positions
 *
 * @returns
 * @memberof Field
 */
  generatePositions () {
    const columns = this._shuffle(this.row)
    const rows = this._shuffle(this.col)

    const pos = this._combineTwoArraysToObject(columns, rows)
    this.positions = this._getCurrentShipsAmountPositions(pos)

    console.log('Positions are planned!')
    console.log(this.positions)
    return this.positions
  }

  /**
   * Shuffle the arrays
   *
   * @param {*} a
   * @returns
   * @memberof Field
   */
  _shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }

    return a
  }

  /**
 * Combine tow arrays into one array
 *
 * @param {*} columns
 * @param {*} rows
 * @returns
 * @memberof Field
 */
  _combineTwoArraysToObject (columns, rows) {
    return rows.reduce(function (result, field, index) {
      result.push({ begin: [columns[index], field], end: [] })
      return result
    }, [])
  }

/**
 * Get number of beginnings acc to number of Ships
 * @param {*} arr
 */
  _getCurrentShipsAmountPositions (arr) {
    return arr.slice(0, this.amountOfShips)
}
}
