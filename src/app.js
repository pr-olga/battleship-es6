import BattleShip from './Model/Ships/Battleship.js'
import Cruiser from './Model/Ships/Cruiser.js'
import Destroyer from './Model/Ships/Destroyer.js'
import Submarine from './Model/Ships/Submarine.js'

require('./assets/sass/style.scss')

const battleship = new BattleShip()
const cruiser = new Cruiser()
const destroyer = new Destroyer()
const submarine = new Submarine()

const setGame = [battleship, cruiser, destroyer, submarine]

setGame ? console.log('-> All ships are on water! Fiiiiiire!!!') : console.log('Something went wrong')
