'use strict'

/**
 * If substraction of cells is certain number,
 * the position is not valid
 *
 * @param {*} arr
 * @returns
 */
export function validatePositions(arr) {
    const pattern = [1, -1, 9, -9, 11, -11]
    let arrayConcat = []

    arr.forEach(function (a) {
      arrayConcat = arrayConcat.concat(a)
    })

    for (let i = 0; i < arrayConcat.length; i++) {
      for (let k = 0; k < arrayConcat.length; k++) {
        let res = arrayConcat[i] - arrayConcat[k]

        if (pattern.includes(res)) {
          return true
        }
      }
    }

    return
  }