'use strict'

import ShipFactory from '../Model/Ship/ShipFactory'
import Field from '../Model/Field/Field'

export default class GenerateShipLocationService {
  constructor () {
    this.flotilla = this._instantiateShips()
    this.positions = this._generatePositions()
  }

  positionShips () {
    const flotilla = this.flotilla
    const positions = this.positions

    // assign begin and end positions
    for (let i = 0; i <= flotilla.length; i++) {
      for (const position in flotilla[i]) {
        if (position === '_position') {
          const posBeginFirst = positions[i].begin[0]
          const posBeginSesond = positions[i].begin[1]

          flotilla[i].position = positions[i]
          flotilla[i].position.end[0] = posBeginFirst - flotilla[i].size

          if (flotilla[i].position.end[0] < 1) {
            flotilla[i].position.end[0] = posBeginFirst + flotilla[i].size
          }

          // convert to one number
          flotilla[i].position.begin = '' + posBeginFirst + posBeginSesond
          flotilla[i].position.end = '' + flotilla[i].position.end[0] + posBeginSesond
        }
      }
    }

    return flotilla
  }

  _generatePositions () {
    return new Field().generatePositions()
  }

  _instantiateShips () {
    const factory = new ShipFactory()
    const battleship = factory.createShips('Battleship')
    const cruiser = factory.createShips('Cruiser')
    const destroyer = factory.createShips('Destroyer')
    const submarine = factory.createShips('Submarine')

    return [battleship, cruiser, destroyer, submarine]
  }
}
