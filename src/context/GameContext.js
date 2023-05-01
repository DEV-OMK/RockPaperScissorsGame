import React from 'react'

const GameContext = React.createContext({
  userOption: '',
  opponentOption: '',
  showResult: '',
  result: '',
  updateUserOption: () => {},
  playAgain: () => {},
  choicesList: [],
  resultConstants: [],
})

export default GameContext
