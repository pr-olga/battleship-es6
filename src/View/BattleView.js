'use strict'

import PlaceShips from '../Services/GenerateShipLocationsService'

export default class BattleView {
  static initLoad () {
    const setGame = new PlaceShips()
    console.log(setGame.positionShips())

    console.log('Ships moved to their positions!')

    setGame ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
  }
}
