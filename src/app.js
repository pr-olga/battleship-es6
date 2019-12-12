'use strict'

import BattleView from './View/BattleView'
import CountGamerGuesses from './Services/CountGamerGuesses'
require('./assets/sass/style.scss')

window.onload = new BattleView().initLoad()
new CountGamerGuesses().setGuessesToGamer()
