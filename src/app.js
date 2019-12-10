import PlaceShips from './Services/CreateShipService'

require('./assets/sass/style.scss')

const setGame = new PlaceShips()
console.log(setGame.positionShips())
console.log('Ships moved to their positions!')

setGame ? console.log('-> Everything is prepeared! Fiiiiiire!!!') : console.log('Something went wrong')
