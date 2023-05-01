import GameContext from '../../context/GameContext'
import {GamePlayContainer, GameButton, ButtonImage} from './styledComponent'

const GamePlay = () => (
  <GameContext.Consumer>
    {value => {
      const {updateUserOption} = value
      const onClickButton = event => {
        updateUserOption(event.target.id)
      }
      return (
        <GamePlayContainer>
          <GameButton>
            <ButtonImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
              id="ROCK"
              alt="ROCK"
              onClick={onClickButton}
              data-testid="rockButton"
            />
          </GameButton>
          <GameButton>
            <ButtonImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
              id="SCISSORS"
              alt="SCISSORS"
              onClick={onClickButton}
              data-testid="scissorsButton"
            />
          </GameButton>

          <GameButton>
            <ButtonImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
              id="PAPER"
              alt="PAPER"
              onClick={onClickButton}
              data-testid="paperButton"
            />
          </GameButton>
        </GamePlayContainer>
      )
    }}
  </GameContext.Consumer>
)

export default GamePlay
