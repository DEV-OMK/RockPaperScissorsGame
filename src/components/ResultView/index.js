import GameContext from '../../context/GameContext'

import {
  ResultViewContainer,
  PlayersContainer,
  PlayerAndItemContainer,
  Player,
  Item,
  ResultText,
  PlayAgainButton,
} from './styledComponent'

const ResultView = () => (
  <GameContext.Consumer>
    {value => {
      const {result, userOption, opponentOption, playAgain, choicesList} = value

      const userOptionItem = choicesList.find(
        eachChoice => eachChoice.id === userOption,
      )

      const opponentOptionItem = choicesList.find(
        eachChoice => eachChoice.id === opponentOption,
      )

      const onClickPlayAgain = () => {
        playAgain()
      }

      return (
        <ResultViewContainer>
          <PlayersContainer>
            <PlayerAndItemContainer>
              <Player>YOU</Player>
              <Item src={userOptionItem.imageUrl} alt="your choice" />
            </PlayerAndItemContainer>
            <PlayerAndItemContainer>
              <Player>OPPONENT</Player>
              <Item src={opponentOptionItem.imageUrl} alt="opponent choice" />
            </PlayerAndItemContainer>
          </PlayersContainer>
          <ResultText>{result}</ResultText>
          <PlayAgainButton type="button" onClick={onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultViewContainer>
      )
    }}
  </GameContext.Consumer>
)

export default ResultView
