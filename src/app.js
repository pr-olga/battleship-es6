import BattleShip from './Model/Ships/Battleship.js'
import Cruiser from './Model/Ships/Cruiser.js'
import Destroyer from './Model/Ships/Destroyer.js'
import Submarine from './Model/Ships/Submarine.js'

require('./assets/sass/style.scss')

const battleship = new BattleShip(1, 4)
const cruiser = new Cruiser(2, 3)
const destroyer = new Destroyer(3, 2)
const submarine = new Submarine(4, 1)

const setGame = [battleship, cruiser, destroyer, submarine]

setGame ? console.log('-> All ships are on water! Fiiiiiire!!!') : console.log('Something went wrong')
