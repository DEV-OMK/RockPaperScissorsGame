import {Component} from 'react'
import GameContext from '../../context/GameContext'
import Header from '../Header'
import GamePlay from '../GamePlay'
import ResultView from '../ResultView'
import Rules from '../Rules'
import {MainContainer, ResponsiveContainer} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const resultConstants = {
  initial: 'INITIAL',
  won: 'YOU WON',
  lose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    userOption: '',
    opponentOption: '',
    showResult: false,
    result: resultConstants.initial,
  }

  getResult = () => {
    const {userOption, opponentOption} = this.state
    let result

    if (userOption === opponentOption) {
      result = resultConstants.draw
    } else if (userOption === 'ROCK') {
      if (opponentOption === 'PAPER') {
        result = resultConstants.lose
      } else {
        result = resultConstants.won
      }
    } else if (userOption === 'PAPER') {
      if (opponentOption === 'ROCK') {
        result = resultConstants.won
      } else {
        result = resultConstants.lose
      }
    } else if (opponentOption === 'ROCK') {
      result = resultConstants.lose
    } else {
      result = resultConstants.won
    }

    this.setState(
      {
        result,
      },
      this.getScore,
    )
  }

  getScore = () => {
    const {result} = this.state
    switch (result) {
      case resultConstants.won:
        this.setState(prevState => ({score: prevState.score + 1}))
        break
      case resultConstants.lose:
        this.setState(prevState => ({score: prevState.score - 1}))
        break
      default:
        break
    }
  }

  updateUserOption = id => {
    this.setState(
      {
        userOption: id,
        opponentOption: choicesList[Math.floor(Math.random() * 3)].id,
        showResult: true,
      },
      this.getResult,
    )
  }

  playAgain = () => {
    this.setState({
      showResult: false,
    })
  }

  render() {
    const {userOption, opponentOption, score, showResult, result} = this.state

    return (
      <GameContext.Provider
        value={{
          score,
          userOption,
          opponentOption,
          showResult,
          result,
          choicesList,
          resultConstants,
          updateUserOption: this.updateUserOption,
          playAgain: this.playAgain,
        }}
      >
        <MainContainer>
          <ResponsiveContainer>
            <Header />
            {!showResult && <GamePlay />}
            {showResult && <ResultView />}
            <Rules />
          </ResponsiveContainer>
        </MainContainer>
      </GameContext.Provider>
    )
  }
}

export default Game
