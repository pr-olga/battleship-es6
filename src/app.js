'use strict'

import BattleView from './View/BattleView'
import Battle from './Controller/Battle'
require('./assets/sass/style.scss')

window.onload = new BattleView().initLoad()
new Battle().onGamerClick()
