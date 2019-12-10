import ShipFactory from './Model/Ship/ShipFactory'
import Field from './Model/Field/Field'

require('./assets/sass/style.scss')

const factory = new ShipFactory()
const battleship = factory.createShips('Battleship')
const cruiser = factory.createShips('Cruiser')
const destroyer = factory.createShips('Destroyer')
const submarine = factory.createShips('Submarine')

const positions = new Field().generatePositions()

battleship.position = positions[0]
cruiser.position = positions[1]
destroyer.position = positions[2]
submarine.position = positions[3]

const setGame = [battleship, cruiser, destroyer, submarine]
console.log(setGame)
console.log('Ships moved to their positions!')

setGame ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
