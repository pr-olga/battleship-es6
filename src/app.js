import ShipFactory from './Model/Ship/ShipFactory'
import Field from './Model/Field/Field'

require('./assets/sass/style.scss')

const factory = new ShipFactory()
const battleship = factory.createShips('Battleship')
const cruiser = factory.createShips('Cruiser')
const destroyer = factory.createShips('Destroyer')
const submarine = factory.createShips('Submarine')

const flotilla = [battleship, cruiser, destroyer, submarine]
const positions = new Field().generatePositions()

for (let i = 0; i <= flotilla.length; i++) {
  for (let position in flotilla[i]) {
    flotilla[i].position = positions[i]
  }
}

const setGame = [battleship, cruiser, destroyer, submarine]
console.log(setGame)
console.log('Ships moved to their positions!')

setGame ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
