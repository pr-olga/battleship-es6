import ShipFactory from './Model/Ship/ShipFactory'
import Field from './Model/Field/Field'

require('./assets/sass/style.scss')

const factory = new ShipFactory()
const battleship = factory.createShips('Battleship')
const cruiser = factory.createShips('Cruiser')
const destroyer = factory.createShips('Destroyer')
const submarine = factory.createShips('Submarine')

const setGame = [battleship, cruiser, destroyer, submarine]

setGame ? console.log('-> All ships are on water! Fiiiiiire!!!') : console.log('Something went wrong')

const field = new Field()
console.log(field.generatePositions())
