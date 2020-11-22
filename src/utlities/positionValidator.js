'use strict'

/**
 * If substraction of cells is certain number,
 * the position is not valid
 *
 * @param {*} arr
 * @returns
 */
export function validatePositions (arr) {
  const pattern = [1, -1, 9, -9, 11, -11]
  let arrayConcat = []
  let shufflePositions = false

  arr.map(a => arrayConcat = arrayConcat.concat(a))
  arrayConcat.map((i) => arrayConcat.map((k) => {
    if (pattern.includes(i - k)) {
      shufflePositions = true
    }
  }))

  return shufflePositions
}