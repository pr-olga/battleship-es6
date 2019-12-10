'use strict'

export default class Field {
  constructor () {
    this.field = []
    this.amountOfShips = 10
    this.row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    this.begin = []
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

    this.begin = this._combineTwoArraysToObject(columns, rows)
    return this.begin
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
      result.push({ begin: [columns[index], field] })
      return result
    }, [])
  }
}
