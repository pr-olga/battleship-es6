'use strict'

import Battleship from './Ships/Battleship'
import Cruiser from './Ships/Cruiser'
import Destroyer from './Ships/Destroyer'
import Submarine from './Ships/Submarine'

export default class ShipFactory {
  createShips (type) {
    switch (type) {
      case 'Battleship':
        return new Battleship()
      case 'Cruiser':
        return new Cruiser()
      case 'Destroyer':
        return new Destroyer()
      case 'Submarine':
        return new Submarine()
    }
  }
}
